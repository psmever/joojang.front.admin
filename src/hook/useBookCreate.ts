import { useState, useEffect, MouseEvent} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'modules/redux';
import { attemptBookCreateAction, attemptBookCreateResetAction} from 'modules/redux/pages';
import * as Interfaces from 'modules/Interfaces';
import GlobalAlert from 'lib/GlobalAlert';
import * as API from 'lib/API';
import axios from 'axios';

export default function useBookCreate() {

    const state_books = useSelector((state: RootState) => state.pages_state.books);

    const dispatch = useDispatch();
    const [bookSearchString, setBookSearchString] = useState('');
    const [bookSearchResultItem, setBookSearchResultItem] = useState<Interfaces.searchBookInfoInterface[]>([]);

    const [isLoading, setIsLoading] = useState<Interfaces.baseSagaStateType>('idle');

    const searchDaumBookApi = () => {
        setIsLoading('loading');
        if(bookSearchString.length > 0) {
            try {
                axios.get(`https://dapi.kakao.com/v3/search/book?target=title&query=${bookSearchString}`, {headers: {'Authorization':'KakaoAK 2f818df48b7f3e5ec3b2e81689df6506'}})
                .then(res => {
                    setBookSearchResultItem(res.data.documents);
                })
            } catch (error) {
                GlobalAlert.thenLocationReload({
                    text: '문제가 발생 했습니다. 다시 시도해 주세요.'
                });
            }
        } else {
            GlobalAlert.default({
                text: '검색어를 입력해 주세요.'
            })
        }

        setIsLoading('success');
    }

    const __handleBookSearchButtonClick = (e: MouseEvent) => {
        e.preventDefault();

        searchDaumBookApi();
    }

    const __handleBookSearchInputCange = (e: string) => {
        setBookSearchString(e);
    }

    const __handleEnterKeyPress = () => {
        searchDaumBookApi();
    }

    const __handleClickBookServerCreate = (state_key: number) => {

        const book_info = bookSearchResultItem[state_key];

        book_info.isbn.split(' ').map( async (n:any, i:number) => {
            if(i === 1) {
                const respone = await API.attemptBookExitsCheckRequest({book_uuid: n})

                if(respone.data.info === true) {
                    GlobalAlert.default({
                        text: '이미 등록 되어 있습니다.'
                    })
                } else {
                    dispatch(attemptBookCreateAction({
                        uuid: n,
                        authors: book_info.authors.join(", "),
                        contents: book_info.contents,
                        isbn: book_info.isbn,
                        publisher: book_info.publisher,
                        thumbnail: book_info.thumbnail,
                        title: book_info.title,
                    }))
                }
            }
        } );
    }

    useEffect(() => {
    }, [bookSearchResultItem])

    useEffect(() => {
        if(state_books.book_create.state === 'success') {
            GlobalAlert.thenHistoryPush({
                text: '등록 처리 되었습니다.',
                push_router: '/books/1'
            });
            dispatch(attemptBookCreateResetAction());
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps,
    }, [state_books.book_create.state])

    return {
        __handleBookSearchButtonClick,
        __handleBookSearchInputCange,
        bookSearchResultItem,
        bookSearchString,
        __handleClickBookServerCreate,
        isLoading,
        __handleEnterKeyPress,
    };
};

