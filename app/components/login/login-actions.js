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

export function login ({ email }) {
  return async dispatch => {
    const user = await api.get(email)
    if (user) {
      dispatch(loggedIn(user))
    }
  }
}

export function logout () {
  return {
    type: types.USER_LOGGED_OUT
  }
}
