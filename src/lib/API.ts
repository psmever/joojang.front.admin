// import * as GlobalAxios from 'lib/GlobalAxios';
import * as GlobalAxios2 from 'lib/GlobalAxios2';
import * as Interfaces from 'modules/Interfaces';

export function attemptLogin(payload: Interfaces.loginRequest): Promise<Interfaces.defaultServerResponse> {
    // return GlobalAxios.start({ authType: false, method: 'post', endpoint: '/api/v1/auth/login', payload: payload});
    return GlobalAxios2.defaultAxios.post('/api/v1/auth/login', payload);
};

export function getSiteData(): Promise<Interfaces.defaultServerResponse> {
    // return GlobalAxios.start(true , 'get', '/api/v1/system/basedata', {});
    // return GlobalAxios.start({ authType: true, method: 'get', endpoint: '/api/v1/system/basedata', payload: {} });
    return GlobalAxios2.authAxios.get('/api/v1/system/basedata', {});
};

export function attemptGetUserList(payload: Interfaces.getUserListRequest): Promise<Interfaces.defaultServerResponse> {
    // return GlobalAxios.start(true, 'get', `/api/v1/admin/users/page/${payload.pageNumber}`, []);
    // return GlobalAxios.start({ authType: true, method: 'get', endpoint: `/api/v1/admin/users/page/${payload.pageNumber}`, payload: {} });
    return GlobalAxios2.authAxios.get(`/api/v1/admin/users/page/${payload.pageNumber}`, {});
};

export function attemptGetUserInfo(payload: Interfaces.getUserInfoRequest): Promise<Interfaces.defaultServerResponse> {
    // return GlobalAxios.start(true, 'get', `/api/v1/admin/users/${payload.user_uuid}/info`, []);
    // return GlobalAxios.start({ authType: true, method: 'get', endpoint: `/api/v1/admin/users/${payload.user_uuid}/info`, payload: [] });
    return GlobalAxios2.authAxios.get(`/api/v1/admin/users/${payload.user_uuid}/info`, {});
};

export function attemptUserDataUpdate(payload: Interfaces.UserDataUpdate): Promise<Interfaces.defaultServerResponse> {
    // return GlobalAxios.start(true, 'post', `/api/v1/admin/users/${payload.user_uuid}/info`, payload);
    // return GlobalAxios.start({ authType: true, method: 'post', endpoint: `/api/v1/admin/users/${payload.user_uuid}/info`, payload: {} });
    return GlobalAxios2.authAxios.post(`/api/v1/admin/users/${payload.user_uuid}/info`, payload);
};

export function attemptUserActiveUpdate(payload: Interfaces.userActiveRequest): Promise<Interfaces.defaultServerResponse> {
    // return GlobalAxios.start(true, 'post', `/api/v1/admin/users/active`, payload);
    // return GlobalAxios.start({ authType: true, method: 'post', endpoint: `/api/v1/admin/users/active`, payload: payload });
    return GlobalAxios2.authAxios.post(`/api/v1/admin/users/active`, payload);
};

export function attemptBookExitsCheckRequest(payload: Interfaces.bookExitsCheckRequest): Promise<Interfaces.defaultServerResponse> {
    // return GlobalAxios.start(true, 'get', `/api/v1/admin/book/${payload.book_uuid}/exits`, {});
    // return GlobalAxios.start({ authType: true, method: 'get', endpoint: `/api/v1/admin/book/${payload.book_uuid}/exits`, payload: {} });
    return GlobalAxios2.authAxios.get(`/api/v1/admin/book/${payload.book_uuid}/exits`, {});
};

export function attemptBookCreateRequest(payload: Interfaces.bookCreateRequest): Promise<Interfaces.defaultServerResponse> {
    // return GlobalAxios.start(true, 'post', `/api/v1/user/books`, payload);
    // return GlobalAxios.start({ authType: true, method: 'post', endpoint: `/api/v1/user/books`, payload: payload });
    return GlobalAxios2.authAxios.post(`/api/v1/user/books`, payload);
};

export function attemptGetBookListRequest(payload: Interfaces.getPageingListRequest): Promise<Interfaces.defaultServerResponse> {
    // return GlobalAxios.start(true, 'get', `/api/v1/admin/books/page/${payload.pageNumber}`, payload);
    // return GlobalAxios.start({ authType: true, method: 'get', endpoint: `/api/v1/admin/books/page/${payload.pageNumber}`, payload: payload });
    return GlobalAxios2.authAxios.get(`/api/v1/admin/books/page/${payload.pageNumber}`, {});
};

export function attemptGetRecommendBookListRequest(payload: Interfaces.getRecommendRequest): Promise<Interfaces.defaultServerResponse> {
    // return GlobalAxios.start(true, 'get', `/api/v1/admin/books/recommend/${payload.gubun}/page/${payload.pageNumber}`, payload);
    // return GlobalAxios.start({ authType: true, method: 'get', endpoint:  `/api/v1/admin/books/recommend/${payload.gubun}/page/${payload.pageNumber}`, payload: {} });
    return GlobalAxios2.authAxios.get(`/api/v1/admin/books/recommend/${payload.gubun}/page/${payload.pageNumber}`, {});
};

export function attemptAddRecommendBookRequest(payload: Interfaces.addRecommendBookRequest): Promise<Interfaces.defaultServerResponse> {
    // return GlobalAxios.start(true, 'post', `/api/v1/admin/books/recommend`, payload);
    // return GlobalAxios.start({ authType: true, method: 'post', endpoint: `/api/v1/admin/books/recommend`, payload: payload });
    return GlobalAxios2.authAxios.post(`/api/v1/admin/books/recommend`, payload);
};

export function attemptDeleteRecommendBookRequest(payload: Interfaces.deleteRecommendBookRequest): Promise<Interfaces.defaultServerResponse> {
    // return GlobalAxios.start(true, 'delete', `/api/v1/admin/books/recommend`, {params:payload});
    // return GlobalAxios.start({ authType: true, method: 'delete', endpoint: `/api/v1/admin/books/recommend`, payload: {params:payload} });
    return GlobalAxios2.authAxios.delete(`/api/v1/admin/books/recommend`, {params:payload});
};


export function attemptGetBookActivityListRequest(payload: Interfaces.getGubunPageingListRequest): Promise<Interfaces.defaultServerResponse> {
    // return GlobalAxios.start(true, 'get', `/api/v1/admin/books/activity/${payload.gubun}/page/${payload.pageNumber}`, payload);
    // return GlobalAxios.start({ authType: true, method: 'get', endpoint: `/api/v1/admin/books/activity/${payload.gubun}/page/${payload.pageNumber}`, payload: payload });
    return GlobalAxios2.authAxios.get(`/api/v1/admin/books/activity/${payload.gubun}/page/${payload.pageNumber}`);
};

export function attemptDeleteBookActivityRequest(payload: Interfaces.deleteBookActivityRequest): Promise<Interfaces.defaultServerResponse> {
    // return GlobalAxios.start(true, 'delete', `/api/v1/admin/books/activity`, {params:payload});
    // return GlobalAxios.start({ authType: true, method: 'delete', endpoint: `/api/v1/admin/books/activity`, payload: {params:payload} });
    return GlobalAxios2.authAxios.delete(`/api/v1/admin/books/activity`, {params:payload});
};