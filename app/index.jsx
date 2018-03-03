import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './components/app/app'


function createContainer () {
  const root = document.createElement('div')
  document.body.appendChild(root)
  return root
}

ReactDOM.render(<App />, createContainer())
