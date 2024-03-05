import React from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md';

export default function Table({ info }) {
    return(
        <div>
        <table className='m-4'>
            <thead>
            <tr>
                <th className='border-2 border-black px-4 mr-2'>No</th>
                <th className='border-2 border-black px-4 m-2'>Name</th>
                <th className='border-2 border-black px-4 m-2'>Gender</th>
                <th className='border-2 border-black px-4 m-2'>Age</th>
                <th className='border-2 border-black px-4 m-2'>Country</th>
                <th className='border-2 border-black px-4 ml-2'>Action</th>
            </tr>
            </thead>
            <tbody>
            {info && info.map((info, index) => {
                {console.log(info)}
                return (
                    <tr key={info._id}>
                      <td className='border-2 border-black px-4 mr-2'>{index + 1}</td>
                      <td className='border-2 border-black px-4 m-2'>{info.name}</td>
                      <td className='border-2 border-black px-4 m-2'>{info.gender}</td>
                      <td className='border-2 border-black px-4 m-2'>{info.age}</td>
                      <td className='border-2 border-black px-4 m-2'>{info.country}</td>
                      <td className='border-2 border-black px-4 ml-2'>
                        <div className='flex flex-row'>
                            <Link to={`/info/details/${info._id}`} className='mr-1'>
                                <BsInfoCircle />
                            </Link>
                            <Link to={`/info/edit/${info._id}`} className='mx-1'>
                                <AiOutlineEdit />
                            </Link>
                            <Link to={`/info/delete/${info._id}`} className='ml-1'>
                                <MdOutlineDelete />
                            </Link>
                        </div>
                      </td>
                    </tr>
                );
            })}
            </tbody>
        </table>
        <div>
        <Link to='/info/create' className='border-2 border-black m-4 p-2'>
            Add New Data
        </Link>
        </div>
        </div>
    )
}