import React from 'react'
import { connect } from 'react-redux'
import NewCrushForm from './NewCrushForm'
import { addNewCrush } from './new-crush-actions'

const NewCrush = props => {
  function submitForm (email) {
    return props.addNewCrush({
      email: email,
      userId: props.user.id
    })
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

function mapDispatchToProps (dispatch, ownProps) {
  return {
    addNewCrush: user => dispatch(addNewCrush(user))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewCrush)
