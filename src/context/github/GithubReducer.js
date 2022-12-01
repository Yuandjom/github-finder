
//note that the action is going to be the type going to be a string 
const githubReducer = (state, action) => {
    switch(action.type){
        case 'GET_USERS':
            return {
                ...state, 
                //update the users to 
                users: action.payload, //note that this should be users not user cos u need to get back the payload 
                loading: false,
            }
        default:
            return state
    }
}

export default githubReducer