import React from 'react'
import { users as api } from '../../api'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

async function newCrush (email, user) {
  
  await api.insert(user,email);
}

class NewCrush extends React.Component {

  submitForm = (e) => {
    e.preventDefault()
    newCrush(this.email.value, this.props.user);
  }
  
  render () {
    return (
      <div>
        <h3>Add new crush here</h3>
        <p>Persons you add to your list of crushes will recieve an email informing them that they have a secret crush and encouraged to list their own crushes. They will not know that they are on your crush-list if they dont add you to their list.</p>
        <form onSubmit={this.submitForm}>
          <label>email</label>
          <input type='email' ref={node => { this.email = node; }} placeholder='name@domain.com'></input>
          <button>Add Crush</button>
        </form>
      </div>
    );
  }
}

function mapStateToProps (state) {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(NewCrush)