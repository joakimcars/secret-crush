import React from 'react'
import { users as api } from '../../api'
import { connect } from 'react-redux'

async function removeUser (user) {
  const userToRemove = {
    id: user
  }
  await api.remove(userToRemove.id)
}

const AccountPage = ({ user }) => {
  function submitForm (event) {
    event.preventDefault()
    confirm('Are you sure you want to delete this account?')
    removeUser(user.id)
  }

  return (
    <React.Fragment>
      <div>
        <form onSubmit={submitForm}>
          <h3>{user.id}</h3>
          <p>do you wish to delete your account</p>
          <button>yes</button>
        </form>
      </div>
    </React.Fragment>
  )
}

function mapStateToProps (state) {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(AccountPage)
