import React from 'react'
import './Cars.css'
//import About from './About'
import { Link } from 'react-router-dom'


function Cars() {
  return (
    <>
      <div className='con1'>
          <Link to={"/About"} className='ru'>        
            <div className='con2'>
              <h2>BUGATTI</h2>
            </div>
          </Link>
          <Link to={"/Home"} className='ru'>
            <div className='con3'>
              <h2>NISSAN</h2>
            </div>
          </Link>
          <Link to={"/Home"} className='ru'>
            <div className='con4'>
              <h2>THAR</h2>
            </div>
          </Link>
          <Link to={"/Home"} className='ru'>
            <div className='con4'>
              <h2>THAR</h2>
            </div>
          </Link>
          <Link to={"/Home"} className='ru'>
            <div className='con4'>
              <h2>THAR</h2>
            </div>
          </Link>
      </div>
    </>
  )
}

export default Cars
