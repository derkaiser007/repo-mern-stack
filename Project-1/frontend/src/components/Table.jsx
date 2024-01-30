import React from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md';

export default function Table({ info }) {
    return(
        <>
        <table className='mt-5 ml-5 border-separate border border-slate-400'>
            <thead>
            <tr>
                <th className='border border-slate-300 rounded'>No</th>
                <th className='border border-slate-300 rounded'>Name</th>
                <th className='border border-slate-300 rounded'>Gender</th>
                <th className='border border-slate-300 rounded'>Age</th>
                <th className='border border-slate-300 rounded'>Country</th>
                <th className='border border-slate-300 rounded'>Action</th>
            </tr>
            </thead>
            <tbody>
            {info.map((info, index) => {
                {console.log(info)}
                return (
                    <tr key={info._id}>
                      <td className='border border-slate-300 rounded'>{index + 1}</td>
                      <td className='border border-slate-300 rounded'>{info.name}</td>
                      <td className='border border-slate-300 rounded'>{info.gender}</td>
                      <td className='border border-slate-300 rounded'>{info.age}</td>
                      <td className='border border-slate-300 rounded'>{info.country}</td>
                      <td>
                        <div className='border border-slate-300 rounded flex flex-row h-9 items-center'>
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
        <div className='mt-5 ml-5'>
        <Link to='/info/create'>
            <MdOutlineAddBox />
        </Link>
        </div>
        </>
    )
}