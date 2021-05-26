import { useState } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'
import CreateForm from '../components/CreateForm'

const CreateCoaster = (props) => {
    const [input, setInput] = useState({})
    const [newCoaster, setNewCoaster] = useState()
    const [redirect, setRedirect] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault()
        const userId = localStorage.getItem('userId')
        const data = new FormData()
        
        data.append('name', input.name)
        data.append('park_located_at', input.park_located_at)
        data.append('location', input.location)
        data.append('year_built', input.year_built)
        data.append('type_of', input.type_of)
        data.append('top_speed_in_mph', input.top_speed_in_mph)
        data.append('length_in_feet', input.length_in_feet)
        data.append('height_in_feet', input.height_in_feet)
        data.append('number_of_inversions', input.number_of_inversions)
        data.append('manufacturer', input.manufacturer)
        data.append('file', input.image)
        data.append('video', input.video)


        axios.post(`${process.env.REACT_APP_BACKEND_URL}/coasters`, data, {
            headers: {
                Authorization: userId,
                'content-type': 'multipart/form-data'
            }
        })
            .then((res) => {
                setNewCoaster(res.data.new_coaster)
                setRedirect(true)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    return (
        <>
            { redirect && <Redirect to={`/rollercoasters/${newCoaster.id}`} exact />}
            <CreateForm header={"Add Roller Coaster"} photo={true}onSubmit={onSubmit} input={input} setInput={setInput} submit={"Add Coaster!"}/>
        </>
    )
}
export default CreateCoaster