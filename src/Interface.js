import React from 'react'
import './Cars.css'
//import MenuIcon from '@mui/icons-material/Menu';
//import AccountBoxIcon from '@mui/icons-material/AccountBox';
import { Link } from 'react-router-dom';

function Interface() {
  return (
    <div>
      <div className='mat'>
        <div className='left'>
          <h1 style={{color:'black'}}>Make a dream of car Collection</h1>
          <p>The invention of cars in the world has made traveling very convenient.
            People can move from one place to another in a short period of time.
            Additionally, it has comfort and privacy which motivates people to buy cars.
            From personal to commercial levels, cars are used by everyone.
          </p>
        </div>
        <Link to={"/Cars"}>
          <div className='right'>
          
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Interface
