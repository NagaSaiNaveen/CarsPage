import React from 'react'
import './Cars.css'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div>
      <div className='lin'>
        <div className='lin1'>
          <Link to={"/Home"}>
            <button>Home</button>
          </Link>
        </div>
        <div className='lin2'>
            <Link to={"/About"}><button>About</button></Link>
            <Link to={"/Contact"}><button>Contact</button></Link>
            <Link to={"/Login"}><button>Login</button></Link>
            <Link to={"/Signup"}><button style={{height:'40px',width:'100px',borderRadius:'40px'}}>Sign Up</button></Link>
        </div>
      </div>
    </div>
  )
}

export default Header
