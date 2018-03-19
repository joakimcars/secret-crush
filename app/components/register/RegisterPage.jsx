import React from 'react'
import { users as api } from '../../api'

async function register (email) {
  const newUser = {
    id: email
  }
  await api.put(newUser)
}

class Register extends React.Component {
  submitForm (e) {
    e.preventDefault()
    register(this.email.value)
  }

  render () {
    return (
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <form onSubmit={e => this.submitForm(e)}>
          <div className='form-group'>
            <label for='emailInput'>Email</label>
            <input id='emailInput' className='form-control' type='email' ref={node => { this.email = node }} placeholder='name@domain.com' />
          </div>
          <button type='submit' className='btn btn-primary'>Register</button>
        </form>
      </div>
    )
  }
}

export default Register
