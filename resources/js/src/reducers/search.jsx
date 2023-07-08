const initialState = {

};
const searchReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_SEARCHS':
            return {
                ...state,
                searchs: action.payload
            }
        default:
            return state;
    }
}
export default searchReducer;