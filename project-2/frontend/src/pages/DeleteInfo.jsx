import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { deleteInfo } from '../redux/InfoSlice'
import { useSelector } from 'react-redux'

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
                <div key={ele._id}>
                  <div>Id: {ele._id}</div>
                  <div>Name: {ele.name}</div>
                  <div>Gender: {ele.gender}</div>
                  <div>Age: {ele.age}</div>
                  <div>Country: {ele.country}</div>
                  <div>Create Time: {new Date(ele.createdAt).toString()}</div>
                  <div>Last Update: {new Date(ele.updatedAt).toString()}</div>
                  <button type="submit" onClick={onDeleteHandler}>Delete Info</button>
                </div>
              );
            }
          })}
        </>
      );
}