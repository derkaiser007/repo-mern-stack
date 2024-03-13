import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'

export default function Header(){

    return(
        <div className='header-container'>
          <Link to='/'>Home</Link>
          <Link to='/products'>Products</Link>
          <Link to='/contact'>Contact</Link>
          <Link to='/about'>About</Link>
        </div>
    )
}