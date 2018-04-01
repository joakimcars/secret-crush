import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import Messages from './Messages'

const MessagesPage = props => {
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
              <p><Link to='/login'>Login</Link> to see your matches</p>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }

  if (props.user.matches === undefined || props.user.matches.length < 1) {
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
            <h1>You have no matches yet</h1>
            <div style={textStyle}>
              <p>Add a <Link to='/newCrush'>New Crush</Link> to improve your chances of a match</p>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }

  return (
    <React.Fragment>
      <div className='jumbotron'>
        <Messages matches={props.user.matches} user={props.user} />
      </div>
    </React.Fragment>
  )
}

function mapStateToProps (state, action) {
  const user = state.user || {}
  const matches = user ? user.matches || {} : {}
  return {
    user: {
      ...user, matches: Object.keys(user.matches || {}).map(id => ({ id, ...matches[id] }))
    }
  }
}

export default connect(mapStateToProps)(MessagesPage)
