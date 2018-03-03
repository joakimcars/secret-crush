import React from 'react'
import ReactDOM from 'react-dom'


function createContainer () {
  const root = document.createElement('div')
  document.body.appendChild(root)
  return root
}

ReactDOM.render(<h1>Hello world</h1>, createContainer())
