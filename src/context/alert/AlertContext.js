import {createContext, useReducer} from 'react'
import alertReducer from './AlertReducer'

const AlertContext = createContext()

//we need our provider 
export const AlertProvider = ({children}) =>{ //take in the props and distructure the children 
    //set our initialise state
    const initialState = null

    //use the reducer hooks 
    const [state, dispatch] = useReducer(alertReducer, initialState)

    //Set an alert
    const setAlert = (msg, type) => {
        // dispatch to the reducer 
        dispatch({
            type: 'SET_ALERT', 
            payload: {msg, type}
        })

        setTimeout(() => dispatch({type: 'REMOVE_ALERT'}), 3000)
    }

    return <AlertContext.Provider value={{
            alert: state,
            setAlert
        }}>{/** here is passed as an object */}
        {children} {/** this is the children prop */}

    </AlertContext.Provider>
}

export default AlertContext //after AlertContext and AlertReducer are done, need to create the component