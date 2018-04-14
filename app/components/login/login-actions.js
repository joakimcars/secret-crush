import { users as api } from '../../api'
import * as types from '../../actions'

export function loggedIn (user) {
  return {
    type: types.USER_LOGGED_IN,
    user
  }
}

export function noSuchUser (email) {
  return {
    type: types.NO_SUCH_USER,
    email
  }
}

export function login ({ email, password }) {
  return async dispatch => {
    const user = await api.get(email, password)
    const matches = await api.checkMatch(email)
    if (user === 'not found') {
      let message = 'Could not find user ' + email + '. Please try again.'
      window.alert(message)
    }
    if (user) {
      var completeUser = {
        id: user.id,
        crushes: user.crushes,
        matches: matches
      }
      if (completeUser.id) {
        dispatch(loggedIn(completeUser))
      }
    }
  }
}

export function logout () {
  return {
    type: types.USER_LOGGED_OUT
  }
}
