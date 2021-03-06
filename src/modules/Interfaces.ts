
export type baseSagaStateType = "idle" | "loading" | "success" | "failure";

export interface defaultServerResponse {
    token_type: string;
    expires_in: number;
    access_token: string;
    refresh_token: string;
    user_name: string;
    message: string;
    user_id: number;
    user_uuid: string;
    user_email: string;
    user_type: string;
    user_type_code: string;
    user_state: string;
    user_state_code: string;
    user_level: string;
    user_level_code: string;
    user_activity_state: string;
    user_active: string;
    activity_count: number;
    read_book_count: number;
    upload_book_count: number;
    user_created_at: string;
    updated_at: string;
    created_at_string: string;
    updated_at_string: string;
    email_verified_at_string: string;
    data: {
        info: boolean;
    }
}

export interface userDetailData {
    user_id: number,
    user_uuid: string,
    user_name: string,
    user_email: string,
    user_type: string,
    user_type_code: string,
    user_state: string,
    user_state_code: string,
    user_level: string,
    user_level_code: string,
    user_activity_state: string,
    user_active: string,
    activity_count: number,
    read_book_count: number,
    upload_book_count: number,
    user_created_at: string,
    updated_at: string,
    created_at_string: string,
    updated_at_string: string,
    email_verified_at_string: string,
}

export interface defaultApiResposePayload {
    state: boolean,
    data: defaultServerResponse
}

export interface defaultPaginationData {
    current_page: number,
    from: number,
    last_page: string,
    per_page: number,
    prev_page_url: string | null,
    to: number,
    total: number,
    first_page: string,
    next_page: string,
    prev_page: string
}


export interface defaultListItem {
    id: number;
    uuid: string;
    email: string;
    name: string;
    type: {
        code_id: string;
        code_name: string;
    },
    state: {
        code_id: string;
        code_name: string;
    },
    level: {
        code_id: string;
        code_name: string;
    },
    active: 'Y' | 'N';
    activity_count: number;
    read_book_count: number;
    created_at: string;
    created_at_atring: string;
}

export interface bookListItem {
    id: number;
    uuid: string;
    title: string;
    authors: string;
    isbn: string;
    publisher: string;
    thumbnail: string;
    active: string;
    user_name: string;
    contents: string;
    user_id: number;
    recommend: boolean;
    created_at_atring: string;
}

export interface RecommendbookListItem {
    list_id: number;
    book_id: number;
    code_id: string;
    code_name: string;
    book_title: string;
    book_thumbnail: string;
    book_uuid: string;
    book_contents: string;
    book_user_id: number;
    book_user_name: string;
    created_at_atring: string;
}
export interface RecommendlistTypeServerResponse {
    current_page: number;
    first_page_url: string;
    from: number;
    last_page: string;
    last_page_url: string;
    next_page_url: string | null;
    path: string;
    per_page: number;
    prev_page_url: string | null;
    to: number;
    total: number;
    first_page: string;
    next_page: string;
    prev_page: string;
    items: RecommendbookListItem[];
}


export interface listTypeServerResponse {
    current_page: number;
    first_page_url: string;
    from: number;
    last_page: string;
    last_page_url: string;
    next_page_url: string | null;
    path: string;
    per_page: number;
    prev_page_url: string | null;
    to: number;
    total: number;
    first_page: string;
    next_page: string;
    prev_page: string;
    items: defaultListItem[];
}

export interface booklistTypeServerResponse {
    current_page: number;
    first_page_url: string;
    from: number;
    last_page: string;
    last_page_url: string;
    next_page_url: string | null;
    path: string;
    per_page: number;
    prev_page_url: string | null;
    to: number;
    total: number;
    first_page: string;
    next_page: string;
    prev_page: string;
    items: bookListItem[];
}
export interface activityListItem {
    list_id: number,
    list_uid: string,
    book_id: number,
    book_title: string,
    book_thumbnail: string,
    user_id: number,
    user_name: string,
    gubun: string,
    gubun_name: string,
    contents: string,
    created_at_string: string,
}
export interface activitylistTypeServerResponse {
    current_page: number;
    first_page_url: string;
    from: number;
    last_page: string;
    last_page_url: string;
    next_page_url: string | null;
    path: string;
    per_page: number;
    prev_page_url: string | null;
    to: number;
    total: number;
    first_page: string;
    next_page: string;
    prev_page: string;
    items: activityListItem[];
}

export interface siteBaseDataResponse {
    items: {
        code_list: any
    }
}


export interface searchBookInfoInterface {
    authors: string[],
    contents: string,
    datetime: string,
    isbn: string,
    price: number,
    publisher: string,
    sale_price: number,
    status: string,
    thumbnail: string,
    title: string,
    translators: string[],
    url: string,
}

///////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * 로그인 리퀘스트.
 */
export interface loginRequest {
    email: string;
    password: string;
}

export interface getUserListRequest {
    pageNumber: string;
}

export interface getPageingListRequest {
    pageNumber: string;
}

export interface getGubunPageingListRequest {
    pageNumber: string;
    gubun: string;
}

export interface getUserInfoRequest {
    user_uuid: string;
}

export interface userActiveRequest {
    user_uuid: string;
    active: 'Y' | 'N'
}

export interface bookExitsCheckRequest {
    book_uuid: string;
}

export interface addRecommendBookRequest {
    book_id: number;
    gubun: string;
}

export interface deleteRecommendBookRequest {
    book_id: number;
}

export interface deleteBookActivityRequest {
    activity_uuid: string;
}

export interface getRecommendRequest {
    pageNumber: string;
    gubun: string;
}

export interface bookCreateRequest {
    uuid: string;
    authors: string;
    contents: string;
    isbn: string;
    publisher: string;
    thumbnail: string;
    title: string;
}


export interface UserDataUpdate {
    user_uuid: string | undefined;
    user_email: string | undefined;
    user_name: string | undefined;
    user_type: string | undefined;
    user_state: string | undefined;
    user_level: string | undefined;
}

export interface loginState {
    state: baseSagaStateType;
    data?: {
        token_type?: string;
        expires_in?: number;
        access_token?: string;
        refresh_token?: string;
        user_name?: string;
    }
    message?: string;
}

export interface tempList {
    state: baseSagaStateType;
    list: listTypeServerResponse;
}

export interface pageState {
    users: {
        user_list: {
            state: baseSagaStateType;
            list?: listTypeServerResponse
        },
        user_info: {
            state: baseSagaStateType;
            data?: userDetailData
        },
        user_data_update: {
            state: baseSagaStateType;
            message?: string;
        },
        user_active_update: {
            state: baseSagaStateType;
            message?: string;
        }
    },
    books: {
        book_create: {
            state: baseSagaStateType;
            message?: string;
        },
        book_list: {
            state: baseSagaStateType;
            list?: booklistTypeServerResponse
        },
        recommend_book_list: {
            state: baseSagaStateType;
            list?: RecommendlistTypeServerResponse
        },
        delete_recommend_book: {
            state: baseSagaStateType;
            message?: string;
        },
        add_recommend_book: {
            state: baseSagaStateType;
            message?: string;
        },
        book_activity_list: {
            state: baseSagaStateType;
            list?: activitylistTypeServerResponse
        },
        delete_book_activity: {
            state: baseSagaStateType;
            message?: string;
        },
    }
}

export interface siteDataState {
    state: baseSagaStateType
    code_list: any
};

export interface apiResponse {
    state?: boolean;
};

