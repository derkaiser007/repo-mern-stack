import { useState, useEffect } from "react"
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default function CreateInfo() {
    const [name, setName] = useState('')
    const [gender, setGender] = useState('')
    const [age, setAge] = useState('')
    const [country, setCountry] = useState('')
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    const onAddHandler = () => {
        const data = {
            name,
            gender,
            age,
            country
          };
          setLoading(true);
          axios
            .post('http://localhost:5555/info', data)
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