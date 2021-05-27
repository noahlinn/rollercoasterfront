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
                for(let buck of res.data.bucket_list){
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
                    <div className="one-wrap">
                        <div className="coaster-image">
                            <img src={coaster.image} />
                        </div>

                        <div className="coaster_info">
                            <h3>{coaster.park_located_at}</h3>
                            <h4>{coaster.location}</h4>
                            <p>Height: {coaster.height_in_feet}ft</p>
                            <p>Max Speed: {coaster.top_speed_in_mph}mph</p>
                            <p>Length: {coaster.length_in_feet}ft</p>
                            <p>Inversions: {coaster.number_of_inversions}</p>
                            <p>Manufacturer: {coaster.manufacturer}</p>
                            <p>Type: {coaster.type_of}</p>

                        </div>
                        {/* <div className="container-container">
                            <div className="video_container">
                                <iframe src={`https://www.youtube.com/embed/${coaster.video}`}
                                    frameborder='0'
                                    allow='autoplay; encrypted-media'
                                    allowfullscreen
                                    title='video'
                                />
                            </div>
                        </div> */}
                    </div>
                    <CoasterButtons getBucketList={getBucketList} getCredits={getCredits} creditsId={creditsId} bucketListId={bucketListId} user={user} coaster={coaster} />
                </>}
            </div>
        </>
    )
}
export default OneCoaster