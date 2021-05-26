import { useParams, Redirect } from 'react-router-dom'
import { useState, useEffect} from 'react'
import axios from 'axios'

import CreateForm from '../components/CreateForm'

const EditCoaster = () => {
    const params = useParams()
    const [input, setInput] = useState(null)
    const [updatedCoaster, setUpdatedCoaster] = useState(null)
    const [redirect, setRedirect] = useState(false)
    
    
    const getOneCoaster = () => {
        axios.get(`${process.env.REACT_APP_BACKEND_URL}/coasters/${params.id}`).then(
            res => setInput(res.data.roller_coaster)
        )
    }
    useEffect(getOneCoaster, [])

    const onSubmit = (e) => {
        e.preventDefault()
        axios.put(`${process.env.REACT_APP_BACKEND_URL}/coasters/${params.id}`, input)
        .then((res) => {
            setUpdatedCoaster(res.data.new_coaster)
            setRedirect(true)
        })
        .catch((err) => {
            console.log(err)
        })
    }
    return(
        <>
        { redirect && <Redirect to={`/rollercoasters/${input.id}`} exact />}
        {input && 
            <CreateForm onSubmit = {onSubmit} input = {input} 
            setInput = {setInput} submit = {"Update!"} header = {"Update Coaster"} photo={false}/>} 
        
       </>

    )
}
export default EditCoaster