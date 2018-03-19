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
    return (
      <div>
        {CrushesItems}
      </div>
    )
  }
}

export default Crushes
