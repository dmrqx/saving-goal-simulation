import React from 'react'
import { render } from '@testing-library/react'

import Box from './Box'

describe('<Box />', () => {
  const Component = () => (
    <Box tag='article' className='some-class'>
      <p>Some children</p>
    </Box>
  )

  test('<Box /> component renders successfully', () => {
    const { getByRole, getByText } = render(<Component />)

    const boxElement = getByRole('article')
    const boxContent = getByText(/some children/i)

    expect(boxElement).toBeInTheDocument()
    expect(boxElement).toContainElement(boxContent)
    expect(boxElement).toHaveClass('box some-class')
  })
})
