import React from 'react'
import { func, number, oneOfType, string } from 'prop-types'

const propTypes = {
  name: string.isRequired,
  onChange: func.isRequired,
  type: string,
  value: oneOfType([number, string]).isRequired
}

const defaultProps = {
  type: 'text'
}

export default function InputTag ({ name, onChange, type, value, ...props }) {
  return (
    <input
      id={name}
      name={name}
      onChange={onChange}
      type={type}
      value={value}
      {...props}
    />
  )
}

InputTag.propTypes = propTypes
InputTag.defaultProps = defaultProps
