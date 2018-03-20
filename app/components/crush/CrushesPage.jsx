import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import Crushes from './Crushes'

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

  if (props.user._crushes === undefined || props.user._crushes.length < 1) {
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
        <Crushes _crushes={props.user._crushes} />
      </div>
    </React.Fragment>
  )
}

function mapStateToProps (state, action) {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(CrushesPage)
