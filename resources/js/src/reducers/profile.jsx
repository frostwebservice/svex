const initialState = {
    brandinfo: {
        id: 0,
        firstname: null,
        lastname: null,
        fullname: "",
        email: "",
        api_token: "",
        condition: null,
        phonenumber: null,
        companyname: null,
        companyfounded: "",
        companywebsite: null,
        companylocation: null,
        budget: "",
        companysize: "",
        aboutbusiness: "",
        instagram: null,
        tiktok: null,
        youtube: null,
        facebook: null,
        twitter: null,
        pinterest: null,
        linkedin: null,
        blogurl: null,
        trial: "",
        email_verified_at: null,
        verification_token: "",
        reset_token: null,
        created_at: "",
        updated_at: "",
    }
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
        case 'GET_SOCIAL_PROFILE':
            return {
                ...state,
                socialinfo: action.payload
            }
        default:
            return state;
    }
}
export default profileReducer;