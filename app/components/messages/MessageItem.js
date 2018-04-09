import React from 'react'

const MessageItem = props => {
  function emailMatch () {
    console.log('email match')
  }
  function messageMatch () {
    console.log('message match')
  }
  const matchStyle = {
    fontWeight: 'bold'
  }

  return (
    <tr>
      <td>
        Congratulations! You have a match with <span style={matchStyle}> {props.match} </span>
      </td>
      <td>
        <a href='#' onClick={messageMatch}>Message</a>
        <span> | </span>
        <a href='#' onClick={emailMatch}> Email</a>
      </td>
    </tr>
  )
}

export default MessageItem
