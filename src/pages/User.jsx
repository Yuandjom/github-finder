import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect, useContext } from 'react'
import GithubContext from '../context/github/GithubContext'

function User() {
    const { getUser, user } = useContext(GithubContext) //use the values from the Context provider

    const params = useParams()

    useEffect(() => {
        getUser(params.login)
    }, []) //rmb to add the array so that the program dont crash 

    return (
        <div>{user.login}</div>
    )
}

export default User