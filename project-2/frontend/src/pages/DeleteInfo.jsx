import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { deleteInfo } from '../redux/InfoSlice'
import { useSelector } from 'react-redux'
import { GoArrowLeft } from "react-icons/go";
import { Link } from 'react-router-dom'

export default function DeleteInfo() {
    const info = useSelector(state => state.value.info.data)
    const { id } = useParams()
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const onDeleteHandler = () => {
        dispatch(deleteInfo(id))
        navigate('/')
    }
    
    return (
        <>
          {info.map(ele => {
            if (id === ele?._id) {
              console.log(ele);
              return (
                <div className='border-2 m-2 p-2 w-2/3 shadow-md shadow-black' key={ele._id}>
                  <div className="absolute inset-0 bg-cover bg-center h-screen" style={{backgroundImage: `url('https://images.pexels.com/photos/20414663/pexels-photo-20414663/free-photo-of-a-person-s-hand-is-reaching-out-to-the-sand.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`, opacity: 0.8}}></div>
                  <div className='relative'>Id: {ele._id}</div>
                  <div className='relative'>Name: {ele.name}</div>
                  <div className='relative'>Gender: {ele.gender}</div>
                  <div className='relative'>Age: {ele.age}</div>
                  <div className='relative'>Country: {ele.country}</div>
                  <div className='relative'>Create Time: {new Date(ele.createdAt).toString()}</div>
                  <div className='relative'>Last Update: {new Date(ele.updatedAt).toString()}</div>
                  <button className='relative border-2 border-black my-2 p-1' type="submit" onClick={onDeleteHandler}>Delete Info</button>
                  <Link to={`/`} className="relative">
                      <GoArrowLeft />
                  </Link>
                </div>
              );
            }
          })}
        </>
      );
}