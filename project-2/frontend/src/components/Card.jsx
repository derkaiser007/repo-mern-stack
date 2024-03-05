import React from "react";
import { Link } from 'react-router-dom'
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md';

export default function Card({ info }) {
    return(
        <>
        <div className='flex flex-row m-2'>
        {info && info.map((info, index) => {
                {console.log(info)}
                return (
                    <div key={info._id} className='border-2 border-transparent shadow-md shadow-black m-2 p-2 w-40 h-40'>
                        <div>No: {index + 1}</div>
                        <div>Name: {info.name}</div>
                        <div>Gender: {info.gender}</div>
                        <div>Age: {info.age}</div>
                        <div>Country: {info.country}</div>
                        <div className='flex flex-row gap-2'>
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
                    </div>
                );
            })}
        </div>
        <div>
            <Link to='/info/create' className='border-2 border-black m-4 p-2'>
                Add New Data
            </Link>
        </div>
        </>
    )
}