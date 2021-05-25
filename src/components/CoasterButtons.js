
import { Link, useParams, Redirect, useHistory } from 'react-router-dom'
import axios from 'axios'

const CoasterButtons = (props) => {
    const history = useHistory();
    const params = useParams()
    const userId = localStorage.getItem('userId')
    const addToCredits = () => {
        axios.put(`${process.env.REACT_APP_BACKEND_URL}/users/credits/${params.id}`, {}, {
            headers: {
                Authorization: userId
            }
        }).then((res) => (console.log(res)))
    }

    const addToWants = () => {
        axios.put(`${process.env.REACT_APP_BACKEND_URL}/users/bucketlist/${params.id}`, {}, {
            headers: {
                Authorization: userId
            }
        }).then((res) => (console.log(res)))
    }
    <Link to exact={`/rollercoasters/${params.id}/edit`} exact></Link>

    const goToEditPage = () => {
        let path = `/rollercoasters/${params.id}/edit`
        history.push(path)
    }
    return (
        <span>
            {props.user.id &&
                <>
                    <button onClick={addToCredits}>Add to Credits</button>
                    <button onClick={addToWants}>Add to Wish List</button>
                    {props.user.id === props.coaster.user_id &&

                        <button onClick={goToEditPage}>Edit Coaster Info</button>}
                </>}
        </span>
    )
}

export default CoasterButtons