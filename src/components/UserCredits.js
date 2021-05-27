import { Link } from 'react-router-dom'

const UserCredits = (props) => {

    return (
        <>

            <h2 classname="cred-head">{props.header}</h2>
            {props.coaster &&
                props.coaster.length !== 0 
                ? <h4>Total: {props.coaster.length}</h4>
                : <h4>None</h4>}
                <div className="cred-list">
            {props.coaster &&
                
                props.coaster.map((creds) => (
                    <Link to={`/rollercoasters/${creds.id}`}>
                        <ul key={creds.id}>
                            <li className="list">{creds.name}</li>
                        </ul>
                    </Link>
                ))
                
            }
            </div>
        </>
    )
}

export default UserCredits