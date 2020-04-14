import React, { useState } from 'react'
import { fireEvent, render, screen } from '@testing-library/react'

import InputTag from './InputTag'

function InputWrapper ({ ...props } = {}) {
  const [value, setValue] = useState('')

  const toUpperCase = ({ target }) => setValue(target.value.toUpperCase())

  return (
    <InputTag
      name='some-input'
      onChange={toUpperCase}
      value={value}
      data-testid='input-component'
      {...props}
    />
  )
}

describe('<InputTag />', () => {
  const testSetup = props => {
    const { getByTestId } = render(<InputWrapper {...props} />)
    return getByTestId('input-component')
  }

  test('<InputTag /> component renders successfully', () => {
    const inputElement = testSetup()

    expect(inputElement).toBeInTheDocument()
  })

  it('executes given onChange method when InputEvent occurs', () => {
    const inputElement = testSetup()

    fireEvent.input(inputElement, { target: { value: 'some value' } })

    expect(inputElement).toHaveValue('SOME VALUE')
  })

  it('overrides default props and previously set attributes using props destructuring', () => {
    const inputElement = testSetup({
      id: 'some-input-id',
      placeholder: 'some placeholder'
    })

    expect(inputElement).toContainElement(
      screen.getByPlaceholderText(/some placeholder/)
    )
    expect(inputElement).toHaveAttribute('id', 'some-input-id')
    expect(inputElement).toHaveAttribute('name', 'some-input')
  })

  it('mantains default input behavior regarding types and values', () => {
    const inputElement = testSetup({ type: 'number' })

    expect(inputElement).toHaveValue(null)

    fireEvent.input(inputElement, { target: { value: 'some value' } })

    expect(inputElement).not.toHaveValue('some value')

    fireEvent.input(inputElement, { target: { value: 1984 } })

    expect(inputElement).toHaveValue(1984)
  })
})
