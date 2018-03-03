import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Header from './Header'
import { HomePage } from '../home'
import { CrushesPage } from '../crush'
import { LoginPage } from '../login'

export default () => {
  return (
    <React.Fragment>
      <Header />
      <div style={{ padding: '10px' }}>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/crushes' component={CrushesPage} />
          <Route path='/login' component={LoginPage} />
        </Switch>
      </div>
    </React.Fragment>
  )
}
