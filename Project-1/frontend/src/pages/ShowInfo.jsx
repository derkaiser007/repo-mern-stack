import React, { useState, useEffect } from "react"
import axios from 'axios'
import { useParams } from 'react-router-dom';

export default function ShowInfo() {
    const [info, setInfo] = useState({})
    const [loading, setLoading] = useState(false)
    const { id } = useParams()
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
    return(
        <>
        <div>Id: {info._id}</div>
        <div>Name: {info.name}</div>
        <div>Gender: {info.gender}</div>
        <div>Age: {info.age}</div>
        <div>Country: {info.country}</div>
        <div>Create Time: {new Date(info.createdAt).toString()}</div>
        <div>Last Update: {new Date(info.updatedAt).toString()}</div>
        </>
    )
}