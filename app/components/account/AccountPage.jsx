import React from 'react'
import { users as api } from '../../api'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

async function removeUser (user) {
  const userToRemove = {
    id: user
  }
  await api.remove(userToRemove.id)
}

const AccountPage = props => {
  if (props.user.id === undefined) {
    const containerStyle = {
      marginLeft: '25%'
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
            <h2>You are not logged in</h2>
            <div style={textStyle}>
              <p><Link to='/login'>Login</Link> to manage your account</p>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
  function submitForm (e) {
    e.preventDefault()
    window.confirm('Are you sure you want to delete this account?')
    removeUser(props.user.id)
  }
  return (
    <React.Fragment>
      <div>
        <form onSubmit={submitForm}>
          <h3>{props.user.id}</h3>
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
