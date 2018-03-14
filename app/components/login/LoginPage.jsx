import React from 'react'
import { connect } from 'react-redux'
import LoginForm from './LoginForm'
import { login, logout } from './login-actions'

const User = ({ user, onLogout }) => {
  return (
    <React.Fragment>
      <h1>Welcome {user.id}</h1>
      <p>Do something!</p>
      <button className='btn btn-primary' onClick={onLogout}>Logout</button>
    </React.Fragment>
  )
}

const LoginPage = props => {
  function handleLogin (data) {
    return props.login({
      email: data.email
    })
  }

  return (
    <React.Fragment>
      {!props.user && <LoginForm onSubmit={handleLogin} />}
      {props.user && <User user={props.user} onLogout={props.logout} />}
    </React.Fragment>
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
