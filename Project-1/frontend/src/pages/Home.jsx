import { useState, useEffect } from "react"
import axios from 'axios'
import Table from '../components/Table'
import Card from "../components/Card"

export default function Home() {
    const [info, setInfo] = useState([])
    const [loading, setLoading] = useState(false)
    const [isToggled, setToggled] = useState(false)

    useEffect(() => {
        setLoading(true)
        axios
        .get('http://localhost:5555/info')
        .then((response) => {
            setInfo(response.data.data)
            setLoading(false)
            //console.log(response.data.data)
        })
        .catch((error) => {
            console.log(error)
            setLoading(false)
        })
    }, [])

    const handleToggle = () => {
        setToggled(!isToggled);
    }

    return(
        <>
        <div>
            <label className='mt-5 ml-5'>
                <input
                 className='cursor-pointer'
                 type="checkbox"
                 checked={isToggled}
                 onChange={handleToggle}
                />
            </label>
            <p>{isToggled ? <Table info={info} /> : <Card info={info} />}</p>
        </div>
        </>
    )
}