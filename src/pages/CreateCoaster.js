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
        axios.post(`${process.env.REACT_APP_BACKEND_URL}/coasters`, input, {
            headers: {
                Authorization: props.user.id
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
            <CreateForm header={"Add Roller Coaster"} onSubmit={onSubmit} input={input} setInput={setInput} submit={"Add Coaster!"}/>
        </>
    )
}
export default CreateCoaster