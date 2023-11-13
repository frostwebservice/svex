export const getBrandProfile = (brandID) => dispatch => {
    let payload = {};
    axios
        .post("/api/get_brand_info", brandID)
        .then(res => dispatch({
            type: 'GET_BRAND_PROFILE',
            payload: res.data
        }))
        .catch(err => console.log(err));

}
export const getUserProfile = (email) => dispatch => {
    let payload = {};
    axios
        .post("/api/get_user_info", email)
        .then(res => dispatch({
            type: 'GET_USER_PROFILE',
            payload: res.data
        }))
        .catch(err => console.log(err));

}
export const getSocialProfile = (userdata) => dispatch => {
    let payload = {};
    axios
        .post("/api/get_social_profile", userdata)
        .then(res => dispatch({
            type: 'GET_SOCIAL_PROFILE',
            payload: res.data
        }))
        .catch(err => console.log(err));

}
export const getBillingInfo = (email) => dispatch => {
    let payload = {};
    axios
        .post("/api/get_billing_info", email)
        .then(res => dispatch({
            type: 'GET_BILLING_INFO',
            payload: res.data
        }))
        .catch(err => console.log(err));

}
export const getSearchs = (email) => dispatch => {
    let payload = {};
    axios
        .post("/api/get_searchs", email)
        .then(res => dispatch({
            type: 'GET_SEARCHS',
            payload: res.data
        }))
        .catch(err => console.log(err));
}
export const doSearch = (email, searchParams) => dispatch => {
    let data = {
        email: email,
        searchParams: searchParams
    }
    let payload = {};
    axios
        .post("/api/search_infs", data)
        .then(res => dispatch({
            type: 'ON_SEARCH',
            payload: { result: res.data, tab: searchParams.tab }
        }))
        .catch(err => console.log(err));
}
export const runSavedSearch = (tab, searchId) => dispatch => {

    dispatch({
        type: 'RUN_SAVED_SEARCH',
        payload: { tab: tab, id: searchId }
    })
}
export const getFavs = (email) => dispatch => {
    let payload = {};
    axios
        .post("/api/get_favs", email)
        .then(res => dispatch({
            type: 'GET_FAVS',
            payload: res.data
        }))
        .catch(err => console.log(err));
}