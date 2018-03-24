import React, { Component } from 'react'
import MessageItem from './MessageItem'

class Messages extends Component {
  render () {
    let MessageItems
    if (this.props.matches) {
      MessageItems = this.props.matches.map(match => {
        return (
          <MessageItem key={match.id} id={match.id} user={this.props.user} match={match} />
        )
      })
    }

    const containerStyle = {
      marginLeft: '20%',
      marginRight: '20%'
    }

    const tableStyle = {
      marginLeft: '4%',
      marginTop: '5%'
    }
    return (
      <div style={containerStyle}>
        <h2>Your matches</h2>
        <table className='table' style={tableStyle}>
          <thead>
            <tr>
              <th>
                Matches
              </th>
            </tr>
          </thead>
          <tbody>
            {MessageItems}
          </tbody>
        </table>
      </div>
    )
  }
}

export default Messages
