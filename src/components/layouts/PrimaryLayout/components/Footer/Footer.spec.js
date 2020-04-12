import React from 'react'
import { render } from '@testing-library/react'

import Footer from './Footer'

describe('<Footer />', () => {
  test('<Footer /> component renders successfully', () => {
    const { getByRole } = render(<Footer />)

    const repositoryLink = getByRole('link')

    const repositoryUrl = 'https://github.com/dmrqx/saving-goal-simulation'
    const textContent = 'Check the code on GitHub'

    expect(repositoryLink).toBeInTheDocument()
    expect(repositoryLink).toHaveAttribute('href', repositoryUrl)
    expect(repositoryLink).toHaveTextContent(textContent)
  })
})
