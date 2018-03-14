import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Header from './Header'
import { HomePage } from '../home'
import { CrushesPage } from '../crush'
import { LoginPage } from '../login'
import { RegisterPage } from '../register'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

const App =  ({user}) => {
  return (
    <React.Fragment>
      <Header />
      <div style={{ padding: '10px' }}>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/crushes' component={CrushesPage} />
          <Route path='/login' component={LoginPage} />
          {!user && <Route path='/register' component={RegisterPage} />}
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

export default withRouter(connect(mapStateToProps)(App))
