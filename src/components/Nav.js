import { Link } from 'react-router-dom'
import { useContext, useState } from 'react'
import { UserContext } from '../context/usercontext'
const Nav = (props) => {
    return(
        <nav>
             <Link to='/'><p>Home</p></Link>
             <Link to='/search'><p>Search</p></Link>
             <Link to='/news'><p>News</p></Link>
            {props.user.id ?
                <>
                
                
                <Link to='/upload'><p>Upload</p></Link>
                
                <Link to='/profile'><p>Profile</p></Link>
                
                <span onClick={() => { localStorage.removeItem('userId'); props.setUser({}) }}>
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