const initialState = {

};
const onsearchReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ON_SEARCH':
            // console.log(action.payload)
            return {
                ...state,
                searchresults: action.payload
            }
        default:
            return state;
    }
}
export default onsearchReducer;