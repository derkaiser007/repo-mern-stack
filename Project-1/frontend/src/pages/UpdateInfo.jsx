import { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

export default function UpdateInfo() {
    const [name, setName] = useState('')
    const [gender, setGender] = useState('')
    const [age, setAge] = useState('')
    const [country, setCountry] = useState('')
    const [loading, setLoading] = useState(false)
    const { id } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        setLoading(true);
        axios.get(`http://localhost:5555/info/${id}`)
        .then((response) => {
            setName(response.data.name);
            setGender(response.data.gender)
            setAge(response.data.age)
            setCountry(response.data.country)
            setLoading(false);
          }).catch((error) => {
            setLoading(false);
            alert('An error happened. Please Chack console');
            console.log(error);
          });
      }, [])
      
      const onEditHandler = () => {
        const data = {
          name,
          gender,
          age,
          country
        };
        setLoading(true);
        axios
          .put(`http://localhost:5555/info/${id}`, data)
          .then(() => {
            setLoading(false);
            navigate('/info');
          })
          .catch((error) => {
            setLoading(false);
            console.log(error);
          });
      };

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
            <button type="submit" onClick={onEditHandler}>Update Info</button>
        </>
    )
}