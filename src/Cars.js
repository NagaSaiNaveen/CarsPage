import React from 'react'
import './Cars.css'
//import About from './About'
import { Link } from 'react-router-dom'


function Cars() {
  return (
    <>
      <div className='con1'>
          <Link to={"/About"}>        
            <div className='con2'>
              
            </div>
          </Link>
          <Link to={"/Home"}>
            <div className='con2'>
            
            </div>
          </Link>
          <Link to={"/Home"}>
            <div className='con2'>
            
            </div>
          </Link>
      </div>
    </>
  )
}

export default Cars
