import { useState, useEffect } from "react"
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { createInfo } from '../redux/InfoSlice'

export default function CreateInfo() {
    const [name, setName] = useState('')
    const [gender, setGender] = useState('')
    const [age, setAge] = useState('')
    const [country, setCountry] = useState('')
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const data = {
      name,
      gender,
      age,
      country
    };

    const onAddHandler = () => {
        dispatch(createInfo(data))
        navigate('/')
    }

    return(
        <>
            <input 
            type="text"
            placeholder="name"
            value={name}
            onChange={(e) => setName(e.target.value)} 
            />
            <input 
            type="text"
            placeholder="gender"
            value={gender}
            onChange={(e) => setGender(e.target.value)} 
            />
            <input 
            type="text"
            placeholder="age"
            value={age}
            onChange={(e) => setAge(e.target.value)} 
            />
            <input 
            type="text"
            placeholder="country"
            value={country}
            onChange={(e) => setCountry(e.target.value)} 
            />
            <button type="submit" onClick={onAddHandler}>Add Info</button>
        </>
    )
}