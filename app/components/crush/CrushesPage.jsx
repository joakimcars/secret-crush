import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import Crushes from './Crushes'
import { crushAdded } from '../newCrush/new-crush-actions'

const CrushesPage = props => {
  if (!props.user) {
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
            <h2>you are not logged in</h2>
            <div style={textStyle}>
              <p><Link to='/login'>Login</Link> to see your crushes</p>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }

  if (props.user.crushes === undefined || props.user.crushes.length < 1) {
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
            <h1>You have no crushes yet</h1>
            <div style={textStyle}>
              <p>Add a <Link to='/newCrush'>New Crush</Link> to see if you have a mutual crush</p>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }

  return (
    <React.Fragment>
      <div className='jumbotron'>
        <Crushes crushes={props.user.crushes} />
      </div>
    </React.Fragment>
  )
}

function mapStateToProps (state, action) {
  const user = state.user || {}
  const crushes = user ? user.crushes || {} : {}
  return {
    user: {
      ...user, crushes: Object.keys(user.crushes || {}).map(id => ({ id, ...crushes[id] }))
    }
  }
}

function mapDispatchToProps (dispatch, ownProps) {
  return {
    crushAdded: user => dispatch(crushAdded(user))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CrushesPage)
