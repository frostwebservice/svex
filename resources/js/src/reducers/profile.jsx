const initialState = {
    brandinfo: {}
};
const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_BRAND_PROFILE':
            return {
                ...state,
                brandinfo: action.payload
            }
        case 'GET_USER_PROFILE':
            return {
                ...state,
                userinfo: action.payload
            }
        default:
            return state;
    }
}
export default profileReducer;