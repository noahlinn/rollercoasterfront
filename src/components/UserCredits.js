import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'
const UserCredits = (props) => {

    // const params = useParams()

    // const getCredits = () => {
    //     axios.get(`${process.env.REACT_APP_BACKEND_URL}/users/credits/${params.id}`).then(
    //         res => setCredits(res.data.credits)
    //     )
    // }
    // useEffect(getCredits, [])
    return (<div>
        <h2>{props.header}</h2>
        {props.coaster && props.coaster.map(creds => (
            <div key={creds.id}>
                <p>{creds.name}</p>
            </div>
        ))}
    </div>
    )
}

export default UserCredits