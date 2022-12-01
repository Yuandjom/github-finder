import {createContext, useState} from "react"

const GithubContext = createContext()

const GITHHUB_URL = process.env.REACT_APP_GITHUB_URL
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN

export const GithubProvider = ({children}) => {
    const [users, setUsers] = useState([]) //1. define the state first
    const [loading, setLoading] = useState(true)

    const fetchUsers = async () => {
        const response = await fetch(`${GITHHUB_URL}/users`, {
            headers: {
                Authorization: `token ${GITHUB_TOKEN}`
            }
        })

        const data = await response.json()
        setUsers(data)
        setLoading(false) //2. during the fetch set the state 
    }
    return <GithubContext.Provider value={{ //this the is return here, which is all the state
        users, 
        loading, 
        fetchUsers
    }}> 
        {children}
    </GithubContext.Provider>
}

export default GithubContext //once we define here, need to wrap the componenets in app.js