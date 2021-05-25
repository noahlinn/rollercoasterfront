import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'

import UserCredits from '../components/UserCredits'
const Profile = (props) => {
    const [profileUser, setProfileUser] = useState(null)
    const [credits, setCredits] = useState(null)
    const [bucketList, setBucketList] = useState(null)
    const params = useParams()

    const getUser = () => {
        axios.get(`${process.env.REACT_APP_BACKEND_URL}/users/${params.id}`).then(
            res => { setProfileUser(res.data.user) }
        )
    }
    useEffect(getUser, [])

    const getCredits = () => {
        axios.get(`${process.env.REACT_APP_BACKEND_URL}/users/credits/${params.id}`).then(
            res => setCredits(res.data.credits)
        )
    }

    useEffect(getCredits, [])

    const getBucketList = () => {
        axios.get(`${process.env.REACT_APP_BACKEND_URL}/users/bucketlist/${params.id}`).then(
            res => setBucketList(res.data.bucket_list)
        )
    }

    useEffect(getBucketList, [])
    return (
        <div>
            {profileUser ? 
            <>
            <h1>{profileUser.name}</h1> 
            <p>{profileUser.location}</p>
            <p>{profileUser.about_me}</p>
            {props.user.id === profileUser.id && <button>Edit</button>}
            </>
            : null}
            <UserCredits header={"Credits"} coaster={credits}/>
            <UserCredits header={"Bucket List"} coaster={bucketList}/>
        </div>
    )

}

export default Profile