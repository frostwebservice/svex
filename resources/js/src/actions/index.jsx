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