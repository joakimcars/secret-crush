import React from 'react'
import { Field, reduxForm } from 'redux-form'

function validate (values) {
  const errors = {}
  if (!values.email) {
    errors.email = 'Please fill in your email'
  }
  return errors
}

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

const RegisterForm = props => {
  const { handleSubmit, valid, submitting } = props
  return (
    <form onSubmit={handleSubmit}>
      <div className='form-group'>
        <Field label='Email' placeholder='name@domain.com' name='email' type='email' component={FieldInput} />
        <button type='submit' className='btn btn-primary' disabled={!valid || submitting}>Register</button>
      </div>
    </form>
  )
}

export default reduxForm({ form: 'registerform', validate })(RegisterForm)
