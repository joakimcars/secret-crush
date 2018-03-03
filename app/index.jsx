import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import { App } from './components/app'
import { BrowserRouter } from 'react-router-dom'

function createContainer () {
  const root = document.createElement('div')
  document.body.appendChild(root)
  return root
}

ReactDOM.render((
  <BrowserRouter>
    <App />
  </BrowserRouter>
), createContainer())
