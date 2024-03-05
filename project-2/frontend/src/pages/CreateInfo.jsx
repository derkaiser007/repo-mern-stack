import { useState, useEffect } from "react"
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { createInfo } from '../redux/InfoSlice'
import { GoArrowLeft } from "react-icons/go";
import { Link } from 'react-router-dom'

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
        <div className="border-2 shadow-md shadow-black m-2 p-2 w-1/3">
            <div className="absolute inset-0 bg-cover bg-center h-screen" style={{backgroundImage: `url('https://images.pexels.com/photos/19733182/pexels-photo-19733182/free-photo-of-a-large-group-of-tall-buildings-in-the-distance.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`, opacity: 0.8}}></div>
            <div className="relative">
            Name:
            <input 
            type="text"
            placeholder="name"
            value={name}
            onChange={(e) => setName(e.target.value)} 
            />
            </div>
            <div className="relative">
            Gender:
            <input 
            type="text"
            placeholder="gender"
            value={gender}
            onChange={(e) => setGender(e.target.value)} 
            />
            </div>
            <div className="relative">
            Age:
            <input 
            type="text"
            placeholder="age"
            value={age}
            onChange={(e) => setAge(e.target.value)} 
            />
            </div>
            <div className="relative">
            Country:
            <input 
            type="text"
            placeholder="country"
            value={country}
            onChange={(e) => setCountry(e.target.value)} 
            />
            </div>
            <button className="relative border-2 border-black m-2 p-1" type="submit" onClick={onAddHandler}>Add Info</button>
            <Link to={`/`} className="relative">
                <GoArrowLeft />
            </Link>
        </div>
    )
}