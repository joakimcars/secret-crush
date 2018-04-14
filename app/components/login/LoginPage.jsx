import React from 'react'
import { connect } from 'react-redux'
import LoginForm from './LoginForm'
import { login, logout } from './login-actions'
import { Redirect } from 'react-router'
import { HomePage } from '../home'

const User = ({ user, onLogout }) => {
  return (
    <Redirect to='/' component={HomePage} />
  )
}

const LoginPage = props => {
  function handleLogin (data) {
    return props.login({
      email: data.email,
      password: data.password
    })
  }

  if (!props.user) {
    return (
      <div className='jumbotron'>
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
          <LoginForm onSubmit={handleLogin} />
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
    login: info => dispatch(login(info)),
    logout: () => dispatch(logout())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage)
