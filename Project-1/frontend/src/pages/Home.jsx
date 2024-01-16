import { useState, useEffect } from "react"
import axios from 'axios'
import { Link } from 'react-router-dom'
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md';

export default function Home() {
    const [info, setInfo] = useState([])
    const [loading, setLoading] = useState(false)
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
    return(
        <>
        <table>
            <thead>
            <tr>
                <th>No</th>
                <th>Name</th>
                <th>Gender</th>
                <th>Age</th>
                <th>Country</th>
                <th>Action</th>
            </tr>
            </thead>
            <tbody>
            {info.map((info, index) => {
                //{console.log(info)}
                return (
                    <tr key={info._id}>
                      <td>{index + 1}</td>
                      <td>{info.name}</td>
                      <td>{info.gender}</td>
                      <td>{info.age}</td>
                      <td>{info.country}</td>
                      <td>
                        <div>
                            <Link to={`/info/details/${info._id}`}>
                                <BsInfoCircle />
                            </Link>
                            <Link to={`/info/edit/${info._id}`}>
                                <AiOutlineEdit />
                            </Link>
                            <Link to={`/info/delete/${info._id}`}>
                                <MdOutlineDelete />
                            </Link>
                        </div>
                      </td>
                    </tr>
                );
            })}
            </tbody>
        </table>
        <Link to='/info/create'>
            <MdOutlineAddBox />
        </Link>
        </>
    )
}