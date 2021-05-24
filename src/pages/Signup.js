import axios from 'axios'
import { useContext, useState } from 'react'

import { Redirect } from 'react-router-dom'

const SignUpPage = (props) => {
    const backEnd = process.env.REACT_APP_BACKEND
    const [input, setInput] = useState({})
    const [redirect, setRedirect] = useState(false)
    const [error, setError] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        setError('')
        axios.post(`${process.env.REACT_APP_BACKEND_URL}/users`, {
            input
        })
            .then((response) => {
                props.setUser(response.data.user)
                localStorage.setItem('userId', response.data.user_id)
            })
            .catch((err) => {
                setError(err.response.data.message)
                // console.log(err);
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
                    <input className="login-form-input" value={input.name} onChange={(e) => setInput({ ...input, name: e.target.value })} />
                </div>
                <label htmlFor="email">Email</label>
                <input className="login-form-input" value={input.email} onChange={(e) => setInput({ ...input, email: e.target.value })} />
                <div>
                    <label htmlFor="location">Location</label>
                    <input className="login-form-input" value={input.location} onChange={(e) => setInput({ ...input, location: e.target.value })} />
                </div>
                <label htmlFor="about_me">About You</label>
                <textarea className="login-form-input" value={input.about_me} onChange={(e) => setInput({ ...input, about_me: e.target.value })} />
                <div>
                    <label htmlFor="password">Password</label>
                    <input className="login-form-input" type="password" value={input.password} onChange={(e) => setInput({ ...input, password: e.target.value })} />
                </div>
                <input className="submit-login" type="submit" value="Sign Up" />

            </form >
        </div >
    )
}
export default SignUpPage