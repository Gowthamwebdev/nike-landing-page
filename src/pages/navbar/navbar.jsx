import React from 'react'

export const Navbar = () => {
  return (
    <div className='nav-container bg-slate-400 flex items-center justify-around mb-8 py-8'> 
    <span>Nike</span>
    <div className="desktop-items">
        <ul className='flex items-end bg-slate-800 justify-between'>
            <li><a href="home">Home</a></li>
            <li><a href="home">About</a></li>
            <li><a href="home">Services</a></li>
            <li></li>
        </ul>
        <a href="home">Contact</a>
        </div>
    </div>
  )
}
