
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
        case 'GET_USER':
            return{
                ...state, 
                user: action.payload, 
                loading: false,
            }
        case 'SET_LOADING':
            return {
                //return the current state
                ...state, 
                loading: true, 
            }
        case 'CLEAR_USERS':
            return {
                ...state, 
                users: []
            }
        default:
            return state
    }
}

export default githubReducer