import React from 'react'
import { connect } from 'react-redux'
import NewCrushForm from './NewCrushForm'

async function registerCrush (email, user) {
  const newCrush = {
    email: email,
    user: user
  }
  console.log(newCrush)
}

const NewCrush = props => {
  function submitForm (newCrush) {
    registerCrush(newCrush.email, props.user)
  }
  return (
    <div className='jumbotron'>
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
