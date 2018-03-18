import React from 'react'
import { users as api } from '../../api'
import { Link } from 'react-router-dom'

class NewCrush extends React.Component {

  submitForm = (e) => {
    e.preventDefault()
    alert(this.email.value);
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

export default NewCrush;