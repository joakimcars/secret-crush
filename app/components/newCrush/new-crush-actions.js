import { users as api } from '../../api'
import * as types from '../../actions'

export function crushAdded (user) {
  return {
    type: types.NEW_CRUSH,
    user
  }
}

export function addNewCrush ({ email, userId }) {
  return async dispatch => {
    const user = await api.addCrush(userId, email)
    if (user) {
      dispatch(crushAdded(user))
      // api.emailCrush(userId, email)
    }
  }
}
