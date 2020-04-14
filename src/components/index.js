import React from 'react'

import { I18nProvider, SavingGoalProvider } from '@origin/components/contexts'
import { SavingGoalSimulation } from '@origin/components/scenes'

export default function App () {
  return (
    <I18nProvider>
      <SavingGoalProvider>
        <SavingGoalSimulation />
      </SavingGoalProvider>
    </I18nProvider>
  )
}
