import React from 'react'
import './Cars.css'
//import MenuIcon from '@mui/icons-material/Menu';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import { Button } from '@mui/material';

function Interface() {
  return (
    <div>
      <div className='lin'>
        <div className='lin1'>
            <AccountBoxIcon fontSize='large'/>
        </div>
        <div className='lin2'>
            <Button>Login</Button>
            <Button>Sign Up</Button>
        </div>
      </div>
      <div className='mat'>
        <div className='left'>
          abc
        </div>
        <div className='right'>
          
        </div>
      </div>
    </div>
  )
}

export default Interface
