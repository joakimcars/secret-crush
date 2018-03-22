import { users as api } from '../../api'
import * as types from '../../actions'

export function crushAdded (user) {
  return {
    type: types.NEW_CRUSH,
    user
  }
}

export function addNewCrush ({ email, userId }) {
  const update = api.addCrush(userId, email)
  if (update) {
    return async dispatch => {
      const user = await api.get(userId)
      if (user) {
        dispatch(crushAdded(user))
      }
    }
  }
}
