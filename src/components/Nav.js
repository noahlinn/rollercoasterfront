import { Link } from 'react-router-dom'
import { useContext, useStatem, useEffect } from 'react'
import { UserContext } from '../context/usercontext'

const Nav = (props) => {
    const { userState } = useContext(UserContext)
    const [user, setUser] = userState
    console.log(user)
    
    return(
        <nav>
             <Link to='/'><p>Home</p></Link>
             <Link to='/searchrollercoasters'><p>Search</p></Link>
             <Link to='/news'><p>News</p></Link>
            {user.id ?
                <>
                
                <Link to='/searchusers'><p>Search Users</p></Link>
                <Link to='/upload'><p>Upload</p></Link>
                
                <Link to={`/profile/${user.id}`}><p>Profile</p></Link>
                
                <span onClick={() => { localStorage.removeItem('userId'); setUser({}) }}>
                    <Link to='/'><p>Log Out</p></Link>
                </span></>
                : <>
                    <Link to='/login'><p>Login</p></Link>
                    
                    <Link to='/signup'><p>Sign Up</p></Link>
                </>}
            <>

            </>
        </nav>
    )    
}

export default Nav