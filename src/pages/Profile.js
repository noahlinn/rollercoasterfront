import { useParams, Link } from 'react-router-dom'
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
            (res) => { setProfileUser(res.data.user) }
        )
            .catch((err) => {
                console.log(err)
            })
    }
    useEffect(getUser, [])

    const getCredits = () => {
        axios.get(`${process.env.REACT_APP_BACKEND_URL}/users/credits/${params.id}`)
            .then(
                (res) => setCredits(res.data.credits)
            )
            .catch((err) => {
                console.log(err)
            })
    }

    useEffect(getCredits, [])

    const getBucketList = () => {
        axios.get(`${process.env.REACT_APP_BACKEND_URL}/users/bucketlist/${params.id}`).then(
            (res) => setBucketList(res.data.bucket_list)
        )
            .catch((err) => {
                console.log(err)
            })
    }

    useEffect(getBucketList, [])
    return (
        <div className="page-container">
            <div className="profile-page">
                {profileUser ?
                    <>
                        <h1 className="search-header">{profileUser.name}</h1>
                        <div className="img-info-creds">

                            <div className="user-info">
                                <img className="p-pic" src={profileUser.image} />
                                <p>{profileUser.city}</p>
                                <p>{profileUser.about_me}</p>
                                <Link to= {`/profile/${params.id}/submissions`}><button className="prof-button">Submitted Roller Coasters</button></Link>

                            </div>

                            <div className="credits">
                                <UserCredits header={"Credits"} coaster={credits} />
                            </div>
                            <div className="bucket">
                                <UserCredits header={"Bucket List"} coaster={bucketList} />
                            </div>
                        </div>


                        {/* {props.user.id === profileUser.id && <button>Edit</button>} */}
                    </>
                    : null}

            </div>
        </div>
    )

}

export default Profile