import { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams, useNavigate } from 'react-router-dom'

export default function DeleteInfo() {
    const [info, setInfo] = useState({})
    const [loading, setLoading] = useState(false)
    const { id } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        setLoading(true)
        axios
        .get(`http://localhost:5555/info/${id}`)
        .then((response) => {
            setInfo(response.data)
            setLoading(false)
            console.log(response.data)
        })
        .catch((error) => {
            console.log(error)
            setLoading(false)
        })
    }, [])

    const onDeleteHandler = () => {
        setLoading(true);
    axios
      .delete(`http://localhost:5555/info/${id}`)
      .then(() => {
        setLoading(false);
        navigate('/');
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
      });
    }
    
    return(
        <>
        <div>Id: {info._id}</div>
        <div>Name: {info.name}</div>
        <div>Gender: {info.gender}</div>
        <div>Age: {info.age}</div>
        <div>Country: {info.country}</div>
        <div>Create Time: {new Date(info.createdAt).toString()}</div>
        <div>Last Update: {new Date(info.updatedAt).toString()}</div>
        <button type="submit" onClick={onDeleteHandler}>Delete Info</button>
        </>        
    )
}