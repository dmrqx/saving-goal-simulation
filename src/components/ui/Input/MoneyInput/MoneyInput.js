import React, { useState } from 'react'
import { func, instanceOf, number, oneOfType, string } from 'prop-types'

import { InputTag } from '..'

const propTypes = {
  formatter: func,
  onChange: func.isRequired,
  validationRegex: instanceOf(RegExp),
  value: oneOfType([number, string]).isRequired
}

const defaultProps = {
  validationRegex: /^$|^([1-9]{1}[0-9]*)(\.\d{0,2})?$/
}

export default function MoneyInput ({
  formatter,
  onChange,
  validationRegex,
  value,
  ...props
}) {
  const [inputValue, setInputValue] = useState(value)

  function validateKeystroke (key) {
    const isAllowedChar = /[\d.]/.test(key)
    const isTypingKey = key.length === 1
    const isNotTypingKey = key.length > 1

    return {
      isValid: isNotTypingKey || (isTypingKey && isAllowedChar),
      isNumericInput: isTypingKey && isAllowedChar,
      isNotTypingKey
    }
  }

  function validateInput (value) {
    return validationRegex.test(value)
  }

  function handleChange ({ target }) {
    const { value: inputValue } = target

    const [strippedValue, formattedValue] = formatter
      ? formatter(inputValue)
      : [inputValue]
    const isValid = validateInput(formattedValue || strippedValue)

    if (isValid) {
      setInputValue(formattedValue || strippedValue)

      if (!strippedValue.endsWith('.')) {
        onChange(+strippedValue)
      }
    }
  }

  function handleKeyDown (event) {
    const { key } = event
    const { isValid } = validateKeystroke(key)

    if (!isValid) return event.preventDefault()
  }

  return (
    <InputTag
      onChange={handleChange}
      onKeyDown={handleKeyDown}
      value={(Boolean(inputValue) && `${inputValue}`) || ''}
      {...props}
    />
  )
}

MoneyInput.propTypes = propTypes
MoneyInput.defaultProps = defaultProps
