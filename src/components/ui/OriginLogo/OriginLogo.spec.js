import React from 'react'
import { render } from '@testing-library/react'

import OriginLogo from './OriginLogo'

describe('<OriginLogo />', () => {
  test('<OriginLogo /> component renders successfully', () => {
    const { getByLabelText } = render(<OriginLogo className='logo' />)
    const originLogo = getByLabelText('Origin Financial primary logotype')

    expect(originLogo).toBeInTheDocument()
    expect(originLogo).toHaveClass('logo')
  })
})
