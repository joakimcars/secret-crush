import { users as api } from '../../api'
import * as types from '../../actions'

export function crushAdded (user) {
  return {
    type: types.NEW_CRUSH,
    user
  }
}

export function newMatch (user) {
  return {
    type: types.NEW_MATCH,
    user
  }
}

export function addNewCrush ({ email, userId }) {
  return async dispatch => {
    const user = await api.addCrush(userId, email)
    const matches = await api.checkMatch(userId, email)

    var completeUser = {
      id: user.id,
      crushes: user.crushes,
      matches: matches
    }
    if (user) {
      dispatch(crushAdded(completeUser))
      // api.emailCrush(userId, email)
    }
  }
}

export function checkMatch (userId, crush) {
  api.checkMatch(userId, crush)
}
