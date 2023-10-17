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
        niches: []
    },
    userinfo: {
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
        niches: []
    },
    userinfo: {
        id: 0,
        username: "",
        full_name: "",
        biography: "",
        is_verified: 0,
        is_business: 0,
        public_email: "",
        external_url: "",
        category_niche: "",
        follower_count: 0,
        following_count: 0,
        avg_like: 0,
        avg_comment: 0,
        engagement_rate: 0,
        comment_rate: 0,
        lc_ratio: 0,
        likes_spread: 0,
        last_post: 0,
        avg_post_interval: 0,
        profile_pic_url_hd: "",
        hashtag: [],
        mentions: [],
        phone_country_code: 0,
        phone_number: "",
        city: "",
        zip: "",
        Country: "",
        account_type: 2,
        language: "en",
        gender: "male",
        age: 0,
        ethnicity: "White"
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