import React from 'react'
import { removeCrush } from '../../api/users'

const CrushItem = props => {
  function deleteCrush () {
    removeCrush(props.user.id, props.crush.id)
  }
  function edit (id) {
    console.log(id)
  }

  return (
    <tr>
      <td>
        {props.crush.id}
      </td>
      <td>
        <a href='#' onClick={deleteCrush}>Delete</a>
        <span> | </span>
        <a href='#' onClick={edit}> Edit</a>
      </td>
    </tr>
  )
}

export default CrushItem
