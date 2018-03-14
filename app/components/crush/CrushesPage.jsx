import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import * as types from '../../actions'
import CrushItem from './CrushItem'
import Crushes from './Crushes'
import { isNullOrUndefined } from 'util';

const CrushesPage = props => {
  
  if (!props.user) {
    return (
      <React.Fragment>
        <h1><Link to='/login'>Login</Link> to see your crushes</h1>
      </React.Fragment>
    )
  }

  if(props.user._crushes==undefined||props.user._crushes<1){
    return (
      <React.Fragment>
        <h1>You have no crushes yet</h1>
        <p>Get started to add some crushes and find love!</p>
      </React.Fragment>
    )
  }

  if(props.user._crushes){
    return(
      <React.Fragment>
          <Crushes _crushes={props.user._crushes} />
        </React.Fragment>
    )
  }
}

function mapStateToProps (state, action) {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(CrushesPage)
