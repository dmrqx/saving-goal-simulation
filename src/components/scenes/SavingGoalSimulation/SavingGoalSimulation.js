import React from 'react'

import { PrimaryLayout } from '@origin/components/layouts'
import { Box } from '@origin/components/ui'
import { SavingGoalHeader } from './components'
import './SavingGoalSimulation.module.css'

export default function SavingGoalSimulation () {
  const pageTitle = (
    <>
      Let's plan your <strong>saving goal.</strong>
    </>
  )

  return (
    <PrimaryLayout pageTitle={pageTitle}>
      <Box tag='section' styleName='root'>
        <SavingGoalHeader type='house' objective='Buy a house' />
      </Box>
    </PrimaryLayout>
  )
}
