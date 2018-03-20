import React, { Component } from 'react'
import CrushesItem from './CrushItem'

class Crushes extends Component {
  render () {
    let CrushesItems
    if (this.props.crushes) {
      CrushesItems = this.props.crushes.map(crush => {
        return (
          <CrushesItem key={crush.id} id={crush.id} crush={crush} />
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
          <thead>
            <tr>
              <th>
                Email
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{CrushesItems}</td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}

export default Crushes
