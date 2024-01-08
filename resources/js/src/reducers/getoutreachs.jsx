const initialState = {
    outreachs:{
        result:[]
    }
};
const outreachReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_OUTREACHS':
            return {
                ...state,
                outreachs: action.payload
            }
        default:
            return state;
    }
}
export default outreachReducer;