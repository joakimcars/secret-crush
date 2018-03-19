import React from 'react'
import { Field, reduxForm } from 'redux-form'

const FieldInput = ({ meta, label, placeholder, input }) => {
  const className = [
    'form-group',
    meta.touched && meta.error ? 'has-error' : '',
    meta.touched && !meta.error ? 'has-success' : '',
    'has-feedback'
  ].join(' ')

  return (
    <div className={className}>
      {label && <label className='control-label' htmlFor={input.name}>{label}</label>}
      <input {...input} className='form-control' placeholder={placeholder || label} />
      {meta.touched && !meta.error && <span className='glyphicon glyphicon-ok form-control-feedback' />}
      {meta.touched && meta.error && <span className='glyphicon glyphicon-remove form-control-feedback' />}
      {meta.touched && meta.error && <span className='help-block'>{meta.error}</span>}
    </div>
  )
}
const LoginForm = props => {
  const { handleSubmit } = props
  return (
    <form onSubmit={handleSubmit}>
      <Field label='Email' placeholder='name@domain.com' name='email' type='text' component={FieldInput} />
      <button type='submit' className='btn btn-primary'>Log in</button>
    </form>
  )
}

export default reduxForm({ form: 'loginform' })(LoginForm)
