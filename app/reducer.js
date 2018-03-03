import { reducer as form } from 'redux-form'

const initialState = {}
export default (state = initialState, action) => {
  return {
    form: form(state.form, action)
  }
}
