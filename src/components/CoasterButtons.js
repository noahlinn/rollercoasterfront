
import { Link, useParams, Redirect, useHistory } from 'react-router-dom'


const CoasterButtons = (props) => {
    const history = useHistory();
    const params = useParams()
    const addToCredits = () => {
        console.log("save")
    }
    const addToWants = () => {
        console.log('wish')
    }
    <Link to exact={`/rollercoasters/${params.id}/edit`}exact></Link>

    const goToEditPage = () => {
        let path = `/rollercoasters/${params.id}/edit`
        history.push(path)
    }
    return (
        <span>
            <button onClick={addToCredits}>Add to Credits</button>
            <button onClick={addToWants}>Add to Wish List</button>
            {props.user.id === props.coaster.user_id && 
            
            <button onClick={goToEditPage}>Edit Coaster Info</button>}
        </span>
    )
}

export default CoasterButtons