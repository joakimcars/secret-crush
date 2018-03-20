import React from 'react'
import { users as api } from '../../api'
import { connect } from 'react-redux'
import NewCrushForm from './NewCrushForm'

const NewCrush = props => {
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
