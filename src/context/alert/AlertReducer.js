const alertReducer = (state, action) => {
    switch(action.type){
        case 'SET_ALERT':
            return action.payload //this will return the message and the type 
        case 'REMOVE_ALERT':
            return null
        default:
            return state
    }
}

export default alertReducer