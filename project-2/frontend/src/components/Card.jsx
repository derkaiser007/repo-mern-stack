import React from "react";
import { Link } from 'react-router-dom'
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md';

export default function Card({ info }) {
    return(
        <>
        <div className='mt-5 ml-5 flex flex-row gap-3'>
        {info && info.map((info, index) => {
                {console.log(info)}
                return (
                    <div key={info._id} className='w-60 h-100 border-separate border border-slate-400 rounded'>
                        <div>No: {index + 1}</div>
                        <div>Name: {info.name}</div>
                        <div>Gender: {info.gender}</div>
                        <div>Age: {info.age}</div>
                        <div>Country: {info.country}</div>
                        <div className='border border-slate-300 rounded flex flex-row h-9 items-center justify-center'>
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
        <div className='mt-5 ml-5'>
            <Link to='/info/create'>
                <MdOutlineAddBox />
            </Link>
        </div>
        </>
    )
}