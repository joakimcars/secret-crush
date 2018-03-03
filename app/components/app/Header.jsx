import React from 'react'
import { Link } from 'react-router-dom'

const NavLink = ({ to, children }) => {
  return (<li className='nav-item'><Link className='nav-link' to={to}>{children}</Link></li>)
}

const NavBrand = ({ children }) => {
  return (<Link className='navbar-brand' to='/'>{children}</Link>)
}

const Navbar = ({ children }) => {
  return (
    <ul className='navbar-nav mr-auto'>
      {children}
    </ul>
  )
}

const Nav = ({ children }) => {
  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-dark' >
      {children}
    </nav>
  )
}

export default () => {
  return (
    <Nav>
      <NavBrand>Secret Crush</NavBrand>
      <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarText' aria-controls='navbarText' aria-expanded='false' aria-label='Toggle navigation'>
        <span className='navbar-toggler-icon' />
      </button>
      <div className='collapse navbar-collapse' id='navbarText'>
        <Navbar>
          <NavLink to='/'>Home</NavLink>
          <NavLink to='/crushes'>Crushes</NavLink>
        </Navbar>
      </div>
    </Nav>
  )
}
