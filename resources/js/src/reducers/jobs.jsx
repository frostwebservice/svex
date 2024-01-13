const initialState = {
  }
const jobsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_JOBS':
            return {
                ...state,
                jobs: action.payload
            }
        default:
            return state;
    }
}
export default jobsReducer;