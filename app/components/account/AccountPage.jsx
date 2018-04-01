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
    window.confirm('Are you sure you want to delete this account?')
    removeUser(user.id)
  }

  const containerStyle = {
    marginLeft: '25%',
    marginRight: '35%'
  }
  const textStyle = {
    marginTop: '4%',
    marginLeft: '5%',
    fontWeight: 'bold'
  }

  return (
    <React.Fragment>
      <div className='jumbotron'>
        <div style={containerStyle}>
          <h3>Delete account {user.id}</h3>
          <div style={textStyle}>
            <form onSubmit={submitForm}>
              <p>Do you wish to delete your account {user.id}? Note that deleting this account will result in the loss of all data connected to your user.</p>
              <button type='submit' className='btn btn-primary'>yes</button>
            </form>
          </div>
        </div>
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
