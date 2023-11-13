const initialState = {

};
const favReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_FAVS':
            return {
                ...state,
                favs: action.payload
            }
        default:
            return state;
    }
}
export default favReducer;