import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import * as types from '../../actions'

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

const Header = (props) => {
  return (
    <Nav>
      <NavBrand>Secret Crush</NavBrand>
      <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarText' aria-controls='navbarText' aria-expanded='false' aria-label='Toggle navigation'>
        <span className='navbar-toggler-icon' />
        </button>
        <div className='collapse navbar-collapse' id='navbarText'>
        <Navbar>
          <NavLink to='/'>Home</NavLink>
          {!props.user && <NavLink to='/login'>Login</NavLink>}
          <NavLink to='/crushes'>Crushes</NavLink>
          {!props.user && <NavLink to='/register'>Register</NavLink>}
          {props.user && <NavLink to='/account'>Account</NavLink>}
        </Navbar>
      </div>
    </Nav>
  )
}


function mapStateToProps (state) {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(Header)

