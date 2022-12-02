import React from 'react'
import { useState, useContext } from 'react'
import GithubContext from '../../context/github/GithubContext'
//note that usually for componenets they will have their own state

function UserSearch() {
    const [text, setText] = useState('') //note that the state is set in the input 

    const { users, searchUsers, clearUsers } = useContext(GithubContext) //destructure from the GithubContext (get the functions)

    const handleChange = (e) => setText(e.target.value) //this means as we type, the state is changed according in the components

    const handleSubmit = (e) => {
        e.preventDefault()

        if (text === '') {
            alert('Please enter something')
        } else {
            searchUsers(text)

            setText('')
        }
    }

    return (
        <div className='grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 mb-8 gap-8'>
            <div>
                <form onSubmit={handleSubmit}>
                    <div className="form-control">
                        <div className="relative">
                            <input type="text"
                                className="w-full pr-40 bg-gray-200 input input-lg text-back"
                                placeholder='Search'
                                value={text}
                                onChange={handleChange}
                            />
                            <button type='submit' className="absolute top-0 right-0 rounded-l-none w-36 btn btn-lg">
                                Go
                            </button>
                        </div>
                    </div>
                </form>
            </div>
            {/**show the clear button if user is > 0 */}
            {users.length > 0 && (
                <div>
                    {/**meed to use the event handler here */}
                    <button onClick={clearUsers} className="btn btn-ghost btn-lg">
                        Clear
                    </button>
                </div>
            )}

        </div>
    )
}

export default UserSearch