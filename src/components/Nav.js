import { Link } from 'react-router-dom'
import { useContext, useStatem, useEffect } from 'react'
import { UserContext } from '../context/usercontext'

const Nav = (props) => {
    const { userState } = useContext(UserContext)
    const [user, setUser] = userState
    console.log(user)

    return (
        <div className="nav-container">
            <img src="https://res.cloudinary.com/drrh2ss0o/image/upload/v1622077217/twitter_header_photo_1_ta0ftv.png" />
            <nav>

                <Link to='/' ><p>Home</p></Link>
                <Link to='/news'><p>Amusement Park News</p></Link>
                <Link to='/searchrollercoasters'><p>Search Roller Coasters</p></Link>
                
                {user.id ?
                    <>

                        <Link to='/searchusers'><p>Search Users</p></Link>
                        <Link to='/upload'><p>Add Roller Coaster</p></Link>

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
        </div>
    )
}

export default Nav