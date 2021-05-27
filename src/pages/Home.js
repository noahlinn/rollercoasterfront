
const Home = (props) => {
    return(
        <div className="page-container">
            {props.user.id && <h3>Welcome Back {props.user.name}</h3>}
            <img className = "home-pic" src ="https://res.cloudinary.com/drrh2ss0o/image/upload/c_scale,h_399/v1622134885/logo_transparent_eegiwz.png"/>
            
            <p className="home-p">Roller Coaster Tracker is a website that allows you to look up specific 
                roller coasters and keep track of ones you have riden and ones you want to ride. Have fun!</p>
        </div>
    )
}
export default Home