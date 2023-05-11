import React from 'react'
import logo from '../Assets/img/logo.png'
export const Navbar = () => {
  return (
    <div className='navbarWrapper'>
    <div className='logoWrap'>
    <img src={logo}/>
    </div>
    <div className='propWrap'>
    <p className='props'>Home</p>
    <p className='props'>Proporties</p>
    <p className='props'>About</p>
    <p className='props'>Blogs</p>
    <button className='button'>Contact us</button>
    </div>
    </div>
  )
}
