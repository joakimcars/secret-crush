import React from 'react'
import { connect } from 'react-redux'
import LoginForm from './LoginForm'
import { login } from './login-actions'
import { Redirect } from 'react-router'
import { HomePage } from '../home'

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
    <Redirect to='/' component={HomePage} />
  )
}

function mapStateToProps (state) {
  return {
    user: state.user
  }
}

function mapDispatchToProps (dispatch, ownProps) {
  return {
    login: info => dispatch(login(info))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage)
