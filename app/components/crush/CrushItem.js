import React, { Component } from 'react'

class CrushItem extends Component {
  deleteCrush (id) {
    console.log(id)
  }
  editCrush (id) {
    console.log(id)
  }

  render () {
    return (
      <tr>
        <td>
          {this.props.crush}
        </td>
        <td>
          <a href='#' onClick={this.deleteCrush.bind(this, this.props.id)}>Delete</a> |
          <a href='#' onClick={this.editCrush.bind(this, this.props.id)}> Edit</a>
        </td>
      </tr>
    )
  }
}

export default CrushItem
