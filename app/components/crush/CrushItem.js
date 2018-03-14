import React, { Component } from 'react';

class CrushItem extends Component {
  deleteCrush(id){
        alert(id);
  }
  render() {
      return (
        <li>
          {this.props.crush} <a href="#" onClick={this.deleteCrush.bind(this, this.props.id)}>delete</a>
        </li>
      );
  }
}

export default CrushItem;