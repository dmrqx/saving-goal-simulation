import React from 'react'
import { render } from '@testing-library/react'

import Header from './Header'

describe('<Header />', () => {
  test('<Header /> component renders successfully', () => {
    const { container, getByLabelText, getByRole } = render(<Header />)

    const headerElement = getByRole('banner')
    const originLogo = getByLabelText('Origin Financial primary logotype')

    expect(container).toContainElement(headerElement)
    expect(headerElement).toContainElement(originLogo)
  })
})
