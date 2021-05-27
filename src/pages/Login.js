import { useState } from 'react'
import axios from 'axios'

const Login = (props) => {
    const [input, setInput] = useState({})
    const [error, setError] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        setError('')
        axios.post(`${process.env.REACT_APP_BACKEND_URL}/users/login`, input)
            .then((response) => {
                props.setUser(response.data.user)
                localStorage.setItem('userId', response.data.user_id)
            })
            .catch((err) => {
                setError(err.response.data.message)
            })
    }
    return (
        <div className="page-container">
            <h2 className="search-header">Log into your accout!</h2>

            { error &&
                <div className="error">{error}</div>}

            <form className="create-form" onSubmit={handleSubmit}>

                <label htmlFor="signup-email">Email:</label>
                <input className="create-form-input" value={input.email} onChange={(e) => setInput({ ...input, email: e.target.value })} />

                <label htmlFor="signup-password">Password:</label>
                <input className="create-form-input" type="password" value={input.password} onChange={(e) => setInput({ ...input, password: e.target.value })} />

                <input className="submit-button"type="submit" value="Log in!" ></input>

            </form>
        </div>
    )
}

export default Login