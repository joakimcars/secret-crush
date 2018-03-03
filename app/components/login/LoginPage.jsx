import React from 'react'
import { Field, reduxForm } from 'redux-form'

const FieldInput = ({ meta, label, ...input }) => {
  const className = [
    'form-group',
    meta.touched && meta.error ? 'has-error' : '',
    meta.touched && !meta.error ? 'has-success' : '',
    'has-feedback'
  ].join(' ')

  return (
    <div className={className}>
      <label className='control-label' htmlFor={input.name}>{label}</label>
      <input {...input} className='form-control' placeholder={label} />
      {meta.touched && !meta.error && <span className='glyphicon glyphicon-ok form-control-feedback' />}
      {meta.touched && meta.error && <span className='glyphicon glyphicon-remove form-control-feedback' />}
      {meta.touched && meta.error && <span className='help-block'>{meta.error}</span>}
    </div>
  )
}

export default reduxForm({ form: 'login-form' })(props => {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
      <form>
        <Field label='User' name='user' type='text' component={FieldInput} />
        <Field label='Password' name='password' type='password' component={FieldInput} />
      </form>
    </div>
  )
})
