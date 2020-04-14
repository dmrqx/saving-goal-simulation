import React from 'react'
import { render } from '@testing-library/react'

import PrimaryButton from './PrimaryButton'

describe('<PrimaryButton />', () => {
  test('<PrimaryButton /> component renders successfully', () => {
    const { getByText } = render(<PrimaryButton />)

    expect(getByText(/confirm/i)).toBeInTheDocument()
  })
})
