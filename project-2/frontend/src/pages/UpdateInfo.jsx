import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { updateInfo } from '../redux/InfoSlice'

export default function UpdateInfo() {
    const { id } = useParams()
    const info = useSelector(state => state.value.info.data.filter((e) => e._id === id))
    console.log(info[0])
    const [name, setName] = useState('')
    const [gender, setGender] = useState('')
    const [age, setAge] = useState('')
    const [country, setCountry] = useState('')
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const data = {
      id,
      name,
      gender,
      age,
      country
    };
    
      
    const onEditHandler = () => {
      dispatch(updateInfo(data))
      navigate('/');          
    };

    return(
        <>
            <input 
            type="text"
            placeholder={info[0].name}
            value={name}
            onChange={(e) => setName(e.target.value)} 
            />
            <input 
            type="text"
            placeholder={info[0].gender}
            value={gender}
            onChange={(e) => setGender(e.target.value)} 
            />
            <input 
            type="text"
            placeholder={info[0].age}
            value={age}
            onChange={(e) => setAge(e.target.value)} 
            />
            <input 
            type="text"
            placeholder={info[0].country}
            value={country}
            onChange={(e) => setCountry(e.target.value)} 
            />
            <button type="submit" onClick={onEditHandler}>Update Info</button>
        </>
    )
}