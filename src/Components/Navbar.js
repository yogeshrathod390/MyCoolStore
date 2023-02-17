import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

const Navbar = (props) => {
  return (

    <>
    
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
   
      <div className="navbar-nav">
        <a className="nav-link" href="#">Features</a>
        <a className="nav-link" href="#">Features</a>

      </div>
      <div className='addtocart'>
      <FontAwesomeIcon icon={faCartShopping} className="icon"/>
      <p className='counting-number'>{props.numb}</p>
      </div>
  </div>
</nav>
    </div>

    </>
   
  )
}

export default Navbar
