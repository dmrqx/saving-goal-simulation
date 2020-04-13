import React from 'react'
import { render } from '@testing-library/react'

import Icon from './Icon'

describe('<Icon />', () => {
  test('<Icon /> component renders successfully', () => {
    const { getByTestId } = render(<Icon name='house' />)

    const iconComponent = getByTestId('icon-component')

    expect(iconComponent).toBeInTheDocument()
    expect(iconComponent).toHaveClass('icon icon-house')
  })
})
