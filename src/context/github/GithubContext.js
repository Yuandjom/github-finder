import {createContext, useReducer} from "react"
import githubReducer from "./GithubReducer"

const GithubContext = createContext()

const GITHHUB_URL = process.env.REACT_APP_GITHUB_URL
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN

export const GithubProvider = ({children}) => {
    //create an initialstate
    const initialState = {
        users: [], 
        loading: false
    }

    //destructor into an array 
    //this will dispatch an item to the reducer
    const [state, dispatch] = useReducer(githubReducer, initialState)

    //Get initial users (testing purposes)
    const fetchUsers = async () => { //this is to get a request
        //call the setLoading function 
        setLoading()

        const response = await fetch(`${GITHHUB_URL}/users`, {
            headers: {
                Authorization: `token ${GITHUB_TOKEN}`
            }
        })

        const data = await response.json() //get the data from the api
        
        dispatch({
            type: 'GET_USERS', 
            //send the payload
            payload: data,
        })
    }
    //Set Loading function 
    const setLoading = () => dispatch({
        type: 'SET_LOADING'
    })



    return <GithubContext.Provider 
        value={{ //this the is return here, which is all the state
            users: state.users, 
            loading: state.loading, 
            fetchUsers,
    }}> 
        {children}
    </GithubContext.Provider>
}

export default GithubContext //once we define here, need to wrap the componenets in app.js