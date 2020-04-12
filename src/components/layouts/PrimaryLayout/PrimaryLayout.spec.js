import React from 'react'
import { render } from '@testing-library/react'

import PrimaryLayout from './PrimaryLayout'

describe('<PrimaryLayout />', () => {
  const Component = () => (
    <PrimaryLayout pageTitle='Some title'>
      <p>Some children</p>
    </PrimaryLayout>
  )

  test('<PrimaryLayout /> component renders successfully', () => {
    const { container, getByRole, getByText } = render(<Component />)

    const footerElement = getByRole('contentinfo')
    const headerElement = getByRole('banner')

    const pageTitle = getByText(/some title/i)
    const pageContent = getByText(/some children/i)

    expect(container).toContainElement(footerElement)
    expect(container).toContainElement(headerElement)
    expect(pageTitle).toBeInTheDocument()
    expect(pageContent).toBeInTheDocument()
  })
})
