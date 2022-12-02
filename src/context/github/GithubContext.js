import {createContext, useReducer} from "react"
import githubReducer from "./GithubReducer"

const GithubContext = createContext()

const GITHHUB_URL = process.env.REACT_APP_GITHUB_URL
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN

//this the Provider
export const GithubProvider = ({children}) => {
    //create an initialstate
    const initialState = {
        users: [], 
        loading: false
    }

    //destructor into an array 
    //this will dispatch an item to the reducer
    const [state, dispatch] = useReducer(githubReducer, initialState)

    //Get search results
    const searchUsers = async (text) => { //this is to get a request (text) is from here
        //call the setLoading function 
        setLoading()

        const params = new URLSearchParams({ //{} this is passing in as an object 
            q: text
        })

        const response = await fetch(`${GITHHUB_URL}/search/users?${params}`, { //note that this is feteching the URL. Key in properly
            headers: {
                Authorization: `token ${GITHUB_TOKEN}`
            }
        })
        
        //destructoring the object and get the item array
        const {items}  = await response.json() //get the data from the api
        
        dispatch({
            type: 'GET_USERS', 
            //send the payload
            payload: items,
        })
    }

    //Clear users from state
    const clearUsers = () => dispatch({ //note that the dispatch (which is an action) is here
        type: 'CLEAR_USERS'
    })


    //Set Loading function 
    const setLoading = () => dispatch({
        type: 'SET_LOADING'
    })

    return <GithubContext.Provider 
        value={{ //this the is return here, which is all the state
            users: state.users, //need to use the dot notation here cos state is an object 
            loading: state.loading, 
            searchUsers,
            clearUsers, 
    }}> 
        {children}
    </GithubContext.Provider>
}

export default GithubContext //once we define here, need to wrap the componenets in app.js