import React, { useEffect } from "react"
import { useDispatch } from "react-redux"
import { useParams } from 'react-router-dom'
import { showInfo } from "../redux/InfoSlice"
import { useSelector } from "react-redux"
import { AiOutlineEdit } from 'react-icons/ai';
import { MdOutlineDelete } from 'react-icons/md';
import { GoArrowLeft } from "react-icons/go";
import { Link } from 'react-router-dom'


export default function ShowInfo() {
    const { id } = useParams()
    const info = useSelector(state => state.value.info.data) 
    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(showInfo(id))
    }, [])
    
    return (
        <div>
          {info.map(ele => {
            if (id === ele?._id) {
              console.log(ele);
              return (
                <div className='border-2 m-2 p-2 w-2/3 shadow-md shadow-black' key={ele._id}>
                  <div className="absolute inset-0 bg-cover bg-center h-screen" style={{backgroundImage: `url('https://images.pexels.com/photos/10415077/pexels-photo-10415077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`, opacity: 0.8}}></div>
                  <div className='relative'>Id: {ele._id}</div>
                  <div className='relative'>Name: {ele.name}</div>
                  <div className='relative'>Gender: {ele.gender}</div>
                  <div className='relative'>Age: {ele.age}</div>
                  <div className='relative'>Country: {ele.country}</div>
                  <div className='relative'>Create Time: {new Date(ele.createdAt).toString()}</div>
                  <div className='relative'>Last Update: {new Date(ele.updatedAt).toString()}</div>
                  <div className='flex flex-row gap-2'>
                    <Link to={`/`} className="relative">
                        <GoArrowLeft />
                    </Link>
                    <Link to={`/info/edit/${ele._id}`} className="relative">
                        <AiOutlineEdit />
                    </Link>
                    <Link to={`/info/delete/${ele._id}`} className="relative">
                        <MdOutlineDelete />
                    </Link>
                  </div>
                </div>
              );
            }
          })}
        </div>
      );        
}