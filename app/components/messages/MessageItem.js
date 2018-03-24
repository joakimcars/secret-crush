import React from 'react'

const MessageItem = props => {
  function emailMatch () {
    console.log('email match')
  }
  function messageMatch () {
    console.log('message match')
  }

  return (
    <tr>
      <td>
        Congratulations! You have a match with {props.match.id}
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
