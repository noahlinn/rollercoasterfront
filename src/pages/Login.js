import { useState } from 'react'
import axios from 'axios'

const Login = (props) => {
    const [input, setInput] = useState({})
    const [error, setError] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault()
        setError('')
        axios.post(`${process.env.REACT_APP_BACKEND_URL}/users/login`, input).then(
            (res) => {
                props.setUser(res.data.user)
                localStorage.setItem('userId', res.data.user_id)
            })
            .catch((err) => {
                // setError(err.res.data.message)
                console.log(err)
            })
    }
    return (
        <div>
            <h2>Log into your accout!</h2>

            { error &&
                <div className="error">{error}</div>}

            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="signup-email">Email:</label>
                    <input id="signup-email" value={input.email} onChange={(e) => setInput({ ...input, email: e.target.value })} />
                </div>
                <div>
                    <label htmlFor="signup-password">Password:</label>
                    <input id="signup-password" type="password" value={input.password} onChange={(e) => setInput({ ...input, password: e.target.value })} />
                </div>
                <div>
                    <input type="submit" value="Log in!" ></input>
                </div>
            </form>
        </div>
    )
}

export default Login