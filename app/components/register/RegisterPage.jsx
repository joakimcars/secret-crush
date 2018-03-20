import React from 'react'
import { users as api } from '../../api'
import RegisterForm from './RegisterForm'

async function register (email) {
  const newUser = {
    id: email
  }
  await api.put(newUser)
}

const Register = props => {
  function submitForm (newUser) {
    register(newUser.email)
  }
  return (
    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
      <RegisterForm onSubmit={submitForm} />
    </div>
  )
}

export default Register
