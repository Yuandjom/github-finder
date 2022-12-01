
//note that the action is going to be the type going to be a string 
const githubReducer = (state, action) => {
    switch(action.type){
        case 'GET_USERS':
            return {
                ...state, //this is return the current state then
                //update the users to 
                users: action.payload, //note that this should be users not user cos u need to get back the payload 
                loading: false,
            }
        case 'SET_LOADING':
            return {
                //get the current state
                ...state, 
                loading: true, 
            }
        default:
            return state
    }
}

export default githubReducer