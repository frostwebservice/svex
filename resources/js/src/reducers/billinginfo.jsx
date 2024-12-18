const initialState = {
    billinginfo: {
        billing_name: "",
        card_number: "",
        zip_code: "",
        country: ""
    }

};

const billinginfoReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_BILLING_INFO':
            return {
                ...state,
                billinginfo: action.payload.data
            }
        default:
            return state;
    }
}
export default billinginfoReducer;