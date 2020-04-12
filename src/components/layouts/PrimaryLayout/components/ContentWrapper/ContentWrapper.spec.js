import React from 'react'
import { render } from '@testing-library/react'

import ContentWrapper from './ContentWrapper'

describe('<ContentWrapper />', () => {
  const Component = () => (
    <ContentWrapper pageTitle='Some title'>
      <p>Some children</p>
    </ContentWrapper>
  )

  test('<ContentWrapper /> component renders successfully', () => {
    const { getByRole, getByText } = render(<Component />)

    const containerElement = getByRole('main')

    const pageTitle = getByText(/some title/i)
    const pageContent = getByText(/some children/i)

    expect(containerElement).toBeInTheDocument()
    expect(containerElement).toContainElement(pageTitle)
    expect(containerElement).toContainElement(pageContent)
  })
})
