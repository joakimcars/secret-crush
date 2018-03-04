import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

const CrushesPage = props => {
  if (!props.user) {
    return (
      <React.Fragment>
        <h1><Link to='/login'>Login</Link> to see your crushes</h1>
      </React.Fragment>
    )
  }

  return (
    <React.Fragment>
      <h1>You have no crushes yet</h1>
      <p>Get started to add some crushes and find love!</p>
    </React.Fragment>
  )
}

function mapStateToProps (state, action) {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(CrushesPage)
