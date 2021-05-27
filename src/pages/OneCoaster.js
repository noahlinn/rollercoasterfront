import { useParams } from 'react-router-dom'
import { useState, useEffect, useContext } from 'react'
import CoasterButtons from '../components/CoasterButtons'
import { UserContext } from '../context/usercontext'
import axios from 'axios'

const OneCoaster = () => {
    const { userState } = useContext(UserContext)
    const [user, setUser] = userState
    const params = useParams()
    const [coaster, setCoaster] = useState(null)
    const [creditsId, setCreditsId] = useState([null])
    const [bucketListId, setBucketListId] = useState([null])


    const getOneCoaster = () => {
        axios.get(`${process.env.REACT_APP_BACKEND_URL}/coasters/${params.id}`).then(
            res => setCoaster(res.data.roller_coaster)
        )
    }

    const getCredits = () => {

        axios.get(`${process.env.REACT_APP_BACKEND_URL}/users/credits/${user.id}`)
            .then(
                (res) => {
                    let creditIdArr = []
                    for (let cred of res.data.credits) {
                        creditIdArr.push(cred.id)
                    }
                    setCreditsId(creditIdArr)
                }
            )
            .catch((err) => {
                console.log(err)
            })
    }

    useEffect(getCredits, [user])

    const getBucketList = () => {
        axios.get(`${process.env.REACT_APP_BACKEND_URL}/users/bucketlist/${user.id}`).then(
            (res) => {
                let bucketIdArr = []
                for (let buck of res.data.bucket_list) {
                    bucketIdArr.push(buck.id)
                }
                setBucketListId(bucketIdArr)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    useEffect(getBucketList, [user])


    useEffect(getOneCoaster, [])
    return (
        <>
            <div className="coaster-page">
                {coaster && <>
                    <h1 className="search-header">{coaster.name}</h1>
                    <div className="photo-info">
                        <div className="coaster-image">
                            <img src={coaster.image} />
                        </div>

                        <div className="coaster_info">
                            <h2>Park: {coaster.park_located_at}</h2>
                            <h3>City: {coaster.location}</h3>
                            <h4>Height: {coaster.height_in_feet}ft</h4>
                            <h4>Max Speed: {coaster.top_speed_in_mph}mph</h4>
                            <h4>Length: {coaster.length_in_feet}ft</h4>
                            <h4>Inversions: {coaster.number_of_inversions}</h4>
                            <h4>Manufacturer: {coaster.manufacturer}</h4>
                            <h4>Type: {coaster.type_of}</h4>
                            <div>
                                <CoasterButtons getBucketList={getBucketList} getCredits={getCredits} creditsId={creditsId} bucketListId={bucketListId} user={user} coaster={coaster} />
                            </div>
                        </div>
                    </div>
                    <div className="fix-vid">
                        <h2 className="pov-head">Point Of View Video</h2>
                        <div className="container-container">

                            <div className="video_container">
                                <iframe src={`https://www.youtube.com/embed/${coaster.video}`}
                                    frameborder='0'
                                    allow='autoplay; encrypted-media'
                                    allowfullscreen
                                    title='video'
                                />
                            </div>
                        </div>
                    </div>

                </>}
            </div>
        </>
    )
}
export default OneCoaster