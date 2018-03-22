import React from 'react'
import { Field, reduxForm } from 'redux-form'

function validate (values) {
  const errors = {}
  if (!values.email) {
    errors.email = 'Please fill in the email'
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

const NewCrushForm = props => {
  const { handleSubmit, valid, submitting } = props

  const containerStyle = {
    marginLeft: '25%',
    marginRight: '35%'
  }
  const textStyle = {
    marginTop: '4%',
    marginLeft: '5%',
    fontWeight: 'bold'
  }
  return (
    <div style={containerStyle}>
      <h2> Add a new Crush</h2>
      <div style={textStyle}>
        <p>When you add a new crush that person will recieve an email informing them that they have a secret crush. But they will not know that person is you unless they list you as one of their crushes.</p>
        <form onSubmit={handleSubmit}>
          <div className='form-group'>
            <Field label='Crush Email' placeholder='name@domain.com' name='email' type='email' component={FieldInput} />
            <button type='submit' className='btn btn-primary' disabled={!valid || submitting}>Add Crush</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default reduxForm({ form: 'newcrushform', validate })(NewCrushForm)
