import React, { Component } from 'react'
import CrushesItem from './CrushItem'

class Crushes extends Component {
  render () {
    let CrushesItems
    if (this.props._crushes) {
      CrushesItems = this.props._crushes.map(crush => {
        return (
          <CrushesItem key={crush._crush_id} id={crush._crush_id} crush={crush._crush} />
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
        <h2>Your crushes</h2>
        <table className='table' style={tableStyle}>
          <th>
            Email
          </th>
          {CrushesItems}
        </table>
      </div>
    )
  }
}

export default Crushes
