import * as types from './actions'
import { reducer as form } from 'redux-form'

const initialState = {
  user: undefined,
  form: {}
}

function user (state = undefined, action) {
  switch (action.type) {
    case types.USER_LOGGED_IN:
      return action.user
    case types.NEW_USER:
      return action.user
    case types.NEW_CRUSH:
      return action.user
    case types.NEW_MATCH:
      return action.user
    case types.USER_LOGGED_OUT:
      return undefined
    default:
      return state
  }
}

export default (state = initialState, action) => {
  return {
    user: user(state.user, action),
    form: form(state.form, action)
  }
}
