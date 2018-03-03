import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Header from './Header'
import { HomePage } from '../home'

export default () => {
  return (
    <React.Fragment>
      <Header />
      <Switch>
        <Route path='/' component={HomePage} />
      </Switch>
    </React.Fragment>
  )
}
