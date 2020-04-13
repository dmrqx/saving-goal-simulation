import React from 'react'
import { render } from '@testing-library/react'

import SavingGoalSimulation from './SavingGoalSimulation'

describe('<SavingGoalSimulation />', () => {
  test('<SavingGoalSimulation /> component renders successfully', () => {
    const { getByText } = render(<SavingGoalSimulation />)

    const headerContent = getByText(/buy a house/i)

    expect(headerContent).toBeInTheDocument()
  })
})
