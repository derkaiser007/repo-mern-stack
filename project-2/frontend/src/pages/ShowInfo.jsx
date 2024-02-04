import React, { useEffect } from "react"
import { useDispatch } from "react-redux"
import { useParams } from 'react-router-dom'
import { showInfo } from "../redux/InfoSlice"
import { useSelector } from "react-redux"


export default function ShowInfo() {
    const { id } = useParams()
    const info = useSelector(state => state.value.info.data) 
    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(showInfo(id))
    }, [])
    
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
                </div>
              );
            }
          })}
        </>
      );        
}