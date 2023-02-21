import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../img/logo.png'
function Header() {
  return (
    <div>
      
      <header className='header'>
          <Link to={'/'}>
             <img src={Logo} alt="" className='logo' />
          </Link>
        <ul className='list' >
          <li>
            <Link to={'Onesection'}>
            Onesection
            </Link>
          </li>
          <li>
            <Link to={'Card'}>
              Card
            </Link>
          </li>
          <li>
            
            <Link to={'Box'}>Box</Link>
          </li>
        </ul>
        
        <button >
          send
        </button>
      </header>
      
    
    </div>
  )
}

export default Header