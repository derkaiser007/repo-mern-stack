import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { updateInfo } from '../redux/InfoSlice'
import { GoArrowLeft } from "react-icons/go";
import { Link } from 'react-router-dom'

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
        <div className='border-2 m-2 p-2 w-80 shadow-md shadow-black'>
            <div className="absolute inset-0 bg-cover bg-center h-screen" style={{backgroundImage: `url('https://images.pexels.com/photos/19770199/pexels-photo-19770199/free-photo-of-people-walking-through-desert.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`, opacity: 0.8}}></div>
            <div className='relative m-2'>
            Name:
            <input 
            type="text"
            placeholder={info[0].name}
            value={name}
            onChange={(e) => setName(e.target.value)} 
            />
            </div>
            <div className='relative m-2'>
            Gender:
            <input 
            type="text"
            placeholder={info[0].gender}
            value={gender}
            onChange={(e) => setGender(e.target.value)} 
            />
            </div>
            <div className='relative m-2'>
            Age:
            <input
            type="text"
            placeholder={info[0].age}
            value={age}
            onChange={(e) => setAge(e.target.value)} 
            />
            </div>
            <div className='relative m-2'>
            Country:
            <input 
            type="text"
            placeholder={info[0].country}
            value={country}
            onChange={(e) => setCountry(e.target.value)} 
            />
            </div>
            <button className='relative border-2 border-black m-2 p-1' type="submit" onClick={onEditHandler}>Update Info</button>
            <Link to={`/`} className="relative">
              <GoArrowLeft />
            </Link>
        </div>
    )
}