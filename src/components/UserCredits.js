import { Link } from 'react-router-dom'

const UserCredits = (props) => {

    return (
        <div>

            <h2>{props.header}</h2>
            {props.coaster &&
                props.coaster.length !== 0 
                ? <h4>Total: {props.coaster.length}</h4>
                : <h4>None</h4>}
            {props.coaster &&

                props.coaster.map((creds) => (
                    <Link to={`/rollercoasters/${creds.id}`}>
                        <div key={creds.id}>
                            <p>{creds.name}</p>
                        </div>
                    </Link>
                ))
            }
        </div>
    )
}

export default UserCredits