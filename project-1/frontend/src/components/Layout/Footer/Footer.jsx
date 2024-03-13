import Reacr from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'

export default function Footer(){

    return(
        <div className='footer-container'>
          <Link to='/contact'>Contact</Link>
          <Link to='/about'>About</Link>
        </div>
    )
}