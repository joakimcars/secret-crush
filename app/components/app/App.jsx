import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Header from './Header'
import { HomePage } from '../home'
import { CrushesPage } from '../crush'
import { LoginPage } from '../login'
import { RegisterPage } from '../register'
import { AccountPage } from '../account'
import { NewCrushPage } from '../newCrush'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { logout } from '../login/login-actions'

const App =  ({user, logout}) => {
  return (
    <React.Fragment>
      <Header />
      <div style={{ padding: '10px' }}>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/crushes' component={CrushesPage} />
          <Route path='/newCrush' component={NewCrushPage} />
          <Route path='/login' component={LoginPage} />
          {!user && <Route path='/register' component={RegisterPage} />}
          {user && <Route path='/account' component={AccountPage} />}
        </Switch>
      </div>
    </React.Fragment>
  )
}

function mapStateToProps (state) {
  return {
    user: state.user
  }
}

function mapDispatchToProps (dispatch, ownProps) {
  return {
       logout: () => dispatch(logout())
  }
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App))
