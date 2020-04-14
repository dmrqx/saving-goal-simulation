import React, { useContext, useState } from 'react'
import { node } from 'prop-types'

import { I18nContext, SavingGoalContext } from '@origin/components/contexts'
import { SavingGoalForm } from '@origin/components/scenes/SavingGoalSimulation/components'
import { PrimaryLayout } from '@origin/components/layouts'
import { FormContainer } from '@origin/components/ui/Form'
import { useRelativeDate } from '@origin/hooks'
import { calculateMonthDiff } from '@origin/utils/date'

const propTypes = {
  children: node.isRequired
}

export default function SavingGoalProvider ({ children }) {
  const localeFormatter = useContext(I18nContext)
  const { getNextMonth } = useRelativeDate()

  const { startDate, dateRange } = setDateRange()

  const initialState = {
    savingGoal: {
      deposit: formatCurrency(0),
      dueDate: formatDate(startDate),
      objective: 'Buy a house',
      periodicity: 'monthly',
      summary: '1 monthly deposit',
      totalAmount: formatCurrency(0),
      type: 'house'
    },
    SceneLayout: props => (
      <PrimaryLayout
        pageTitle={
          <>
            Let's plan your <strong>saving goal.</strong>
          </>
        }
        {...props}
      />
    ),
    SimulationForm: props =>
      FormContainer(SavingGoalForm, {
        ...props,
        initialState: getFormInitialState(),
        onChange: updateSavingGoal
      })
  }

  const [sceneState, setSceneState] = useState(initialState)

  function formatDate (date) {
    return localeFormatter.formatDate(date, { month: 'long', year: 'numeric' })
  }

  function formatCurrency (amount) {
    return localeFormatter.formatCurrency(amount)
  }

  function setDateRange () {
    const now = new Date()

    const startDate = getNextMonth(now)
    const dateRange = [startDate]

    return { startDate, dateRange }
  }

  function getFormInitialState () {
    return {
      amount: 0,
      date: startDate,
      dateRange
    }
  }

  function updateSavingGoal ({ amount, date }) {
    const { periodicity } = sceneState.savingGoal

    const term = calculateMonthDiff([startDate, date]) + 1

    const deposit = formatCurrency(amount / term)
    const dueDate = formatDate(date)
    const summary = `${term} ${periodicity} ${
      term === 1 ? 'deposit' : 'deposits'
    }`
    const totalAmount = formatCurrency(amount)

    setSceneState(({ savingGoal, ...prevState }) => ({
      ...prevState,
      savingGoal: { ...savingGoal, deposit, dueDate, summary, totalAmount }
    }))
  }

  return (
    <SavingGoalContext.Provider value={sceneState}>
      {children}
    </SavingGoalContext.Provider>
  )
}

SavingGoalProvider.propTypes = propTypes
