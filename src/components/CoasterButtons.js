
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
        }).then((res) => {
            props.getCredits()
        }).catch((err) => {
            console.log(err)
        })
    }

    const addToBucketList = () => {
        axios.put(`${process.env.REACT_APP_BACKEND_URL}/users/bucketlist/${params.id}`, {}, {
            headers: {
                Authorization: userId
            }
        }).then((res) => {
            props.getCredits()
        }).catch((err) => {
            console.log(err)
        })
    }
    <Link to exact={`/rollercoasters/${params.id}/edit`} exact></Link>

    const goToEditPage = () => {
        let path = `/rollercoasters/${params.id}/edit`
        history.push(path)
    }

    const removeFromCredits = () => {
        axios.delete(`${process.env.REACT_APP_BACKEND_URL}/users/credits/${params.id}`, {
            headers: {
                Authorization: userId
            }
        }).then((res) => {
            props.getCredits()
        }).catch((err) => {
            console.log(err)
        })
    }

    const removeFromBucketList = () => {
        axios.delete(`${process.env.REACT_APP_BACKEND_URL}/users/bucketlist/${params.id}`, {
            headers: {
                Authorization: userId
            }
        }).then((res) => {
            props.getBucketList()
        }).catch((err) => {
            console.log(err)
        })
    }


    return (
        <span>
            {props.user.id &&
                <>
                    {props.creditsId && props.creditsId.includes(parseInt(params.id))
                        ? <button onClick={removeFromCredits}>Remove from Credits</button>
                        : <button onClick={addToCredits}>Add to Credits</button>}

                    {props.bucketListId.includes(parseInt(params.id))
                        ? <button onClick={removeFromBucketList}>Remove from Bucket List</button>
                        : <button onClick={addToBucketList}>Add to Bucket List</button>}

                    {props.user.id === props.coaster.user_id &&
                        <button onClick={goToEditPage}>Edit Coaster Info</button>}
                </>}
        </span>
    )
}

export default CoasterButtons