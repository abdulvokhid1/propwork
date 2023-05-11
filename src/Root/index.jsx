import React from 'react'
import Home from '../Components/Home'
import { Navbar } from '../Components'

export const Root = () => {
  return (
    <div className='rootWrapper'>
    <Navbar/>
    <Home/>
    </div>
  )
}
