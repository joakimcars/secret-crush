import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const UserLoggedIn = ({ user }) => {
  return (
    <React.Fragment>
      <p>Add a <Link to='/newCrush'>New Crush</Link> to see if you have a mutual crush</p>
    </React.Fragment>
  )
}

const NoUserLoggedIn = ({ user }) => {
  return (
    <React.Fragment>
      <p> <Link to='/login'>Login</Link> or <Link to='/register'>Register</Link> to see if you have a mutual crush</p>
    </React.Fragment>
  )
}

const containerStyle = {
  marginLeft: '25%',
  marginRight: '35%'
}

const textStyle = {
  marginTop: '4%',
  marginLeft: '5%',
  fontWeight: 'bold'
}

const HomePage = props => {
  return (
    <div>
      <div className='jumbotron' >
        <div className='presentation' style={containerStyle}>
          <h1>Welcome to Secret Crush</h1>
          <div style={textStyle}>
            <p>Secret Crush is a simple application that allows you to connect with someone that you know but would like to get to know better. The key concept with secret crush is that they will only find out that you are intrested if they are aswell. <br /><br /> Secret Crush is 100 % free and always will be. </p>
            {props.user && <UserLoggedIn />}
            {!props.user && <NoUserLoggedIn />}
          </div>
        </div>
      </div>
    </div>
  )
}

function mapStateToProps (state) {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(HomePage)
