import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap'
import 'babel-polyfill'
import 'bootstrap/dist/css/bootstrap.min.css'
import { App } from './components/app'
import { BrowserRouter } from 'react-router-dom'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import reducer from './reducer'

const store = createStore(reducer, applyMiddleware(thunk))

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
