import React from 'react'
import { useEffect, useState } from 'react'
import Spinner from '../layout/Spinner'


function UserResults() { //making a request from this componenet
    const [users, setUsers] = useState([]) //1. define the state first
    const [loading, setLoading] = useState(true)

    useEffect(() => { //this is running the fetchUsers
        fetchUsers()
    }, [])

    const fetchUsers = async () => {
        const response = await fetch(`${process.env.REACT_APP_GITHUB_URL}/users`, {
            headers: {
                Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`
            }
        })

        const data = await response.json()
        setUsers(data)
        setLoading(false) //2. during the fetch set the state 
    }

    if (!loading) {
        return (
            <div className='grid grid-cols-1 gap-8 xl:grid-cols-4lg:grid-cols-3 md:grid-cols-3'>
                {users.map((user) => (
                    <h3>{user.login}</h3>
                ))}
            </div>
        )
    } else {
        return <Spinner />
    }


}

export default UserResults