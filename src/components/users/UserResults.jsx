import React from 'react'
import { useEffect, useContext } from 'react'
import Spinner from '../layout/Spinner'
import UserItem from './UserItem'
import GithubContext from '../../context/github/GithubContext'

function UserResults() { //making a request from this componenet

    //pull out what we want from the context 
    const { users, loading, fetchUsers } = useContext(GithubContext)

    useEffect(() => { //this is running the fetchUsers
        fetchUsers()
    }, [])


    if (!loading) {
        return (
            <div className='grid grid-cols-1 gap-8 xl:grid-cols-4lg:grid-cols-3 md:grid-cols-3'>
                {users.map((user) => (
                    <UserItem key={user.id} user={user} />
                ))}
            </div>
        )
    } else {
        return <Spinner />
    }


}

export default UserResults