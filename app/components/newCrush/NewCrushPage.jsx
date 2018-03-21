import React from 'react'
import { users as api } from '../../api'
import { connect } from 'react-redux'
import NewCrushForm from './NewCrushForm'
import { Link } from 'react-router-dom'

const NewCrush = props => {
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
              <p><Link to='/login'>Login</Link> to add a new crush</p>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
  function submitForm (crush) {
    api.addCrush(props.user.id, crush)
  }

  return (
    <div className='jumbotron' >
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <NewCrushForm onSubmit={submitForm} />
      </div>
    </div>
  )
}

function mapStateToProps (state) {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(NewCrush)
