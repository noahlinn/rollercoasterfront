import axios from 'axios'
import { useState } from 'react'

import { Redirect } from 'react-router-dom'

const SignUpPage = (props) => {

    const [input, setInput] = useState({})

    const [error, setError] = useState('')

    
    const handleSubmit = (e) => {
        e.preventDefault()

        const data = new FormData()
        data.append('file', input.prof_pic)
        data.append('name', input.name)
        data.append('email', input.email)
        data.append('location', input.location)
        data.append('about_me', input.about_me)
        data.append('password', input.password)


        setError('')
        axios.post(`${process.env.REACT_APP_BACKEND_URL}/users`, data, {
            headers: {
                'content-type': 'multipart/form-data'
              }
        }
        )
            .then((response) => {
                props.setUser(response.data.user)
                localStorage.setItem('userId', response.data.user_id)
            })
            .catch((err) => {
                setError(err.response.data.message)
                
            })
    }

    return (
        <div className="login-div">
            <h1>Sign Up</h1>
            { error &&
                <div className="error">{error}</div>}
            <form className="login-form" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name</label>
                    <input className="login-form-input" value={input.name} onChange={(e) => setInput({ ...input, name: e.target.value })} required/>
                </div>
                <label htmlFor="email">Email</label>
                <input className="login-form-input" value={input.email} onChange={(e) => setInput({ ...input, email: e.target.value })} required/>
                <div>
                    <label htmlFor="location">Location</label>
                    <input className="login-form-input" value={input.location} onChange={(e) => setInput({ ...input, location: e.target.value })} required/>
                </div>
                <label htmlFor="about_me">About You</label>
                <textarea className="login-form-input" value={input.about_me} onChange={(e) => setInput({ ...input, about_me: e.target.value })} required/>
                <div>
                    <label htmlFor="profile_picture">Profile Picture</label>
                    <input className="login-form-input" type="file" onChange={(e) => setInput({ ...input, prof_pic: e.target.files[0] })} required/>
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input className="login-form-input" type="password" value={input.password} onChange={(e) => setInput({ ...input, password: e.target.value })} required/>
                </div>
                <input className="submit-login" type="submit" value="Sign Up" />

            </form >
        </div >
    )
}
export default SignUpPage