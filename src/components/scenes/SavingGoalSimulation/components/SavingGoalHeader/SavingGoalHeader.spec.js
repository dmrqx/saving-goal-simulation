import React from 'react'
import { render } from '@testing-library/react'

import SavingGoalHeader from './SavingGoalHeader'

describe('<SavingGoalHeader />', () => {
  test('<SavingGoalHeader /> component renders successfully', () => {
    const { getByTestId, getByText } = render(
      <SavingGoalHeader type='house' objective='Some objective' />
    )

    const iconComponent = getByTestId('icon-component')
    const titleElement = getByText(/some object/i)

    expect(iconComponent).toBeInTheDocument()
    expect(titleElement).toBeInTheDocument()
  })
})
