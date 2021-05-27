import axios from 'axios'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import UserCredits from '../components/UserCredits'

const UserSubmit = () => {
    const [submissions, setSubmissions] = useState(null)
    const params = useParams()

    const getSubimssions = () => {
        axios.get(`${process.env.REACT_APP_BACKEND_URL}/users/created/${params.id}`)
            .then((res) => { setSubmissions(res.data.results) })
            .catch((err) => { console.log(err) })
    }
    useEffect(getSubimssions, [])
    return (
        <div className = "page-container">
            <div className="credits submissions">
                <UserCredits header={"User Submissions"} coaster={submissions} />
            </div>
        </div>
    )
}

export default UserSubmit