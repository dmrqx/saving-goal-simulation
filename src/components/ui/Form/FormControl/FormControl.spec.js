import React from 'react'
import { render } from '@testing-library/react'

import FormControl from './FormControl'

describe('<FormControl />', () => {
  const input = (
    <input id='some-input' name='some-input' data-testid='input-component' />
  )
  const setupTest = props =>
    render(
      <FormControl name='some-input' {...props}>
        {input}
      </FormControl>
    )

  test('<FormControl /> component renders successfully', () => {
    const { getByTestId } = setupTest()

    const inputElement = getByTestId('input-component')

    expect(inputElement).toBeInTheDocument()
  })

  test("given 'label' prop a string renders a label element with prop value as text content", () => {
    const { getByLabelText } = setupTest({ label: 'Some label' })

    const labeledInput = getByLabelText('Some label')

    expect(labeledInput).toBeInTheDocument()
  })

  test("given no value for 'label' prop no label is rendered within the component", () => {
    const { getByTestId, queryByLabelText } = setupTest()

    const inputElement = getByTestId('input-component')
    const labeledInput = queryByLabelText('Some label')

    expect(inputElement).toBeInTheDocument()
    expect(labeledInput).not.toBeInTheDocument()
  })

  test("given 'prepend' prop a string renders a pseudo-element with prop value as text content", () => {
    const { container } = setupTest({ prepend: '@' })

    const [formControlWrapper] = container.firstChild.getElementsByClassName(
      'form-control'
    )

    expect(formControlWrapper).toBeInTheDocument()
    expect(formControlWrapper).toHaveClass('form-control__prepend')
    expect(formControlWrapper).toHaveStyle("--prepend-content: '@'")
  })
})
