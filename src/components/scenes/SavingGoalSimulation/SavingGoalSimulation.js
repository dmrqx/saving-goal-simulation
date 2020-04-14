import React from 'react'
import { shape, string } from 'prop-types'

import { SavingGoalContext } from '@origin/components/contexts'
import { Box, PrimaryButton } from '@origin/components/ui'
import { useWithContextConsumer } from '@origin/hooks'
import { SavingGoalHeader, SimulationSummary } from './components'
import './SavingGoalSimulation.module.css'

const propTypes = {
  context: shape({
    savingGoal: shape({
      deposit: string.isRequired,
      dueDate: string.isRequired,
      objective: string.isRequired,
      periodicity: string.isRequired,
      summary: string.isRequired,
      totalAmount: string.isRequired,
      type: string.isRequired
    }).isRequired
  }).isRequired
}

function SavingGoalSimulation ({ context }) {
  const { savingGoal, SceneLayout, SimulationForm } = context

  function fromContext (keys) {
    return Object.fromEntries(keys.map(key => [key, savingGoal[key]]))
  }

  return (
    <SceneLayout>
      <Box tag='section' styleName='root'>
        <SavingGoalHeader {...fromContext(['type', 'objective'])} />
        <SimulationForm />
        <SimulationSummary
          {...fromContext([
            'deposit',
            'dueDate',
            'periodicity',
            'summary',
            'totalAmount'
          ])}
        />

        <PrimaryButton />
      </Box>
    </SceneLayout>
  )
}

// eslint-disable-next-line react-hooks/rules-of-hooks
export default useWithContextConsumer(SavingGoalSimulation, SavingGoalContext)

SavingGoalSimulation.propTypes = propTypes
