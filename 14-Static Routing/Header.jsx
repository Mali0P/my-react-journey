import React from 'react'
import { Link } from 'react-router-dom'

export default function Header () {
  return (
    <div>
        <h1 className='text-[45px] font-[550]'>Static Routing</h1>
        <nav>
            <ul>
                <li><Link to={'/'}>Home</Link></li>
                  
                <li><Link to={'/Course'}>Courses</Link></li>
                <li><Link to={'/About'}>About</Link></li>
            </ul>
        </nav>
    </div>
  )
}
