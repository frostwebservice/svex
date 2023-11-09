
const initialState = {

};
const runsaveReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'RUN_SAVED_SEARCH':
            return {
                ...state,
                runsavestate: action.payload
            }
        default:
            return state;
    }
}
export default runsaveReducer;