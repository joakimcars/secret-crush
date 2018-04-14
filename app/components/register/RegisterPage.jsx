import React from 'react'
import { connect } from 'react-redux'
import RegisterForm from './RegisterForm'
import { register } from './register-action'
import { Redirect } from 'react-router'
import { HomePage } from '../home'

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
    register: info => dispatch(register(info))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Register)
