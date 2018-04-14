import { users as api } from '../../api'
import * as types from '../../actions'

export function loggedIn (user) {
  return {
    type: types.NEW_USER,
    user
  }
}
export function logout () {
  return {
    type: types.USER_LOGGED_OUT
  }
}
export function register ({ email, password }) {
  return async dispatch => {
    const newUser = {
      id: email,
      password: password
    }
    await api.put(newUser)
    const user = await api.get(email, password)
    if (user) {
      dispatch(loggedIn(user))
    }
  }
}
