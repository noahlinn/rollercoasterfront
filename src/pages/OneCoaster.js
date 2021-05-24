import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import CoasterButtons from '../components/CoasterButtons'
import axios from 'axios'
const OneCoaster = () => {
    const params = useParams()
    const [coaster, setCoaster] = useState(null)

    const getOneCoaster = () => {
        axios.get(`${process.env.REACT_APP_BACKEND_URL}/coasters/${params.id}`).then(
            res => setCoaster(res.data.roller_coaster)
        )
    }


    useEffect(getOneCoaster, [])
    return (
        <>

            <div className="coaster-page">
                {coaster && <>
                    <h1>{coaster.name}</h1>
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
                    <CoasterButtons/>
                </>}
            </div>
        </>
    )
}
export default OneCoaster