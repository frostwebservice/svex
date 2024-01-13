const initialState = {
    email:"",title:"",brief:"",niche:"Acne and Skin Care",shoutoutonly:"shoutoutonly",typesarray:[],socialtypes:"",ig:"",tt:"",yt:"",tw:"",pt:"",li:"",bw:"",payselected:"paid",paid:"maxbudget",barter:"",revenue:"",custom:"",businessurl:"",socialhandle:"",images:"",videos:"",articles:"",totalreach:"all",location:"all",gender:"all",agerange:"all",engagementrate:"all",favorites:"",outreachgroups:""
  }
const jobReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'UPDATE_JOB':
            return {
                ...state,
                [action.payload.which]: action.payload.value
            }
        default:
            return state;
    }
}
export default jobReducer;