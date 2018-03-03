import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import { App } from './components/app'
import { BrowserRouter } from 'react-router-dom'
import reducer from './reducer'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

const store = createStore(reducer)

function createContainer () {
  const root = document.createElement('div')
  document.body.appendChild(root)
  return root
}

ReactDOM.render((
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
), createContainer())
