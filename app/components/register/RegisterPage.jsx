import React from 'react'
import { connect } from 'react-redux'
import RegisterForm from './RegisterForm'
import { register, logout } from './register-action'
import { Redirect } from 'react-router'
import { HomePage } from '../home'

const User = ({ user, onLogout }) => {
  return (
    <Redirect to='/' component={HomePage} />
  )
}

const Register = props => {
  function submitForm (data) {
    return props.register({
      email: data.email,
      password: data.password
    })
  }

  if (!props.user) {
    return (
      <div className='jumbotron'>
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
          <RegisterForm onSubmit={submitForm} />
        </div>
      </div>
    )
  }

  return (
    <User user={props.user} onLogout={props.logout} />
  )
}

function mapStateToProps (state) {
  return {
    user: state.user
  }
}

function mapDispatchToProps (dispatch, ownProps) {
  return {
    register: info => dispatch(register(info)),
    logout: () => dispatch(logout())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Register)
