import React from 'react'
import { users as api } from '../../api'
import { Link } from 'react-router-dom'

async function register (email) {
  const newUser = {
    id: email
  }
  console.log(newUser)
  await api.put(newUser)
}

class Register extends React.Component {
  submitForm = (e) => {
    e.preventDefault()
    register(this.email.value);
  }

  render () {
    return (
      <div>
        <form onSubmit={this.submitForm}>
          <label>email</label>
          <input type='email' ref={node => { this.email = node; }} placeholder='name@domain.com'></input>
          <button>register</button>
        </form>
      </div>
    );
  }
}

export default Register;



