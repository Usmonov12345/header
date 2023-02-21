import React from 'react'
import {Link ,  NavLink } from 'react-router-dom'
import Logo from '../img/logo.png'
function Header() {
  return (
    <div>
      
      <header className='header'>
          <Link to={'Main'}>
             <img src={Logo} alt="" className='logo' />
          </Link>
        <ul className='list' >
          <li className='item'>
            <NavLink to={'Onesection'} className="item">
            Onesection
            </NavLink>
          </li>
          <li className='item'>
            <NavLink to={'Card'} className="item">
              Card
            </NavLink>
          </li>
          <li className='item'>
            
            <NavLink to={'Box'} className="item">Box</NavLink>
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