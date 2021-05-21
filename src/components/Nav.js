import { Link } from 'react-router-dom'

const Nav = (props) => {
    return(
        <nav>
            <Link to='/'>Home</Link>
            {'  |   '}
            {props.user.id ?
                <>
                    <Link to='/dashboard'>profile</Link>
                    {'  |   '}
                    <span onClick={() => { localStorage.removeItem('userId'); props.setUser({}) }}>
                        <Link to='/'><p>Log Out</p></Link>
                    </span>
                    {'  |   '}
                    <Link to='/search'>Search</Link>
                </>
                :
                <>
                    <Link to='/login'>Login</Link>
                    {'  |   '}

                    <Link to='/signup'>Signup</Link>
                </>}
            <>

            </>
        </nav>
    )    
}

export default Nav