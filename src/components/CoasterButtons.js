
import { Link, useParams, Redirect, useHistory } from 'react-router-dom'
import {useState} from 'react'
import axios from 'axios'

const CoasterButtons = (props) => {
    const history = useHistory();
    const params = useParams()
    const userId = localStorage.getItem('userId')
    const [redirect, setRedirect] = useState(false)

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
            props.getBucketList()
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

    const deletos = () => {
        axios.delete(`${process.env.REACT_APP_BACKEND_URL}/coasters/${params.id}`)
        .then(
            setRedirect(true)
        )
        .catch((err) => console.log(err))
    }

    return (
        <div className="coaster-buttons">
            { redirect && <Redirect to={`/searchrollercoasters`} exact />}
            {props.user.id &&
                <>
                    {!props.creditsId.includes(parseInt(params.id)) || props.creditsError
                        ? <button onClick={addToCredits}>Add to Credits</button>
                        : <button onClick={removeFromCredits}>Remove from Credits</button>}

                    {!props.bucketListId.includes(parseInt(params.id)) || props.bucketError 
                        ?  <button onClick={addToBucketList}>Add to Bucket List</button>
                        : <button onClick={removeFromBucketList}>Remove from Bucket List</button>}

                    
                    {props.user.id === props.coaster.user_id &&
                        <>
                            <button onClick={goToEditPage}>Edit Coaster Info</button>
                            <button onClick={deletos}>Delete Roller Coaster</button>
                        </>}
                </>}
        </div>
    )
}

export default CoasterButtons