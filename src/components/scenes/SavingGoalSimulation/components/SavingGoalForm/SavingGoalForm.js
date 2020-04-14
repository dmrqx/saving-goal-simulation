import React, { useEffect } from 'react'
import { arrayOf, instanceOf, func, number, shape } from 'prop-types'

import { FormControl } from '@origin/components/ui/Form'
import { MonthlyDateInput } from '@origin/components/ui/Input'
import { useLocalizedMoneyInput as LocalizedMoneyInput } from '@origin/hooks'

const propTypes = {
  state: shape({
    amount: number,
    date: instanceOf(Date),
    dateRange: arrayOf(instanceOf(Date))
  }).isRequired,
  dispatch: func.isRequired,
  onChange: func.isRequired
}

export default function SavingGoalForm ({ state, dispatch, onChange }) {
  const { amount, date, dateRange } = state

  function handleInputChange (payload) {
    dispatch({ payload })
  }

  useEffect(() => {
    onChange(state)
  }, [state, onChange])

  return (
    <>
      <FormControl label='Total amount' name='total-amount' prepend='$'>
        <LocalizedMoneyInput
          name='total-amount'
          value={amount}
          onChange={amount => handleInputChange({ amount })}
          required
        />
      </FormControl>

      <FormControl
        formControlClassNames='form-control--monthly-date'
        label='Reach goal by'
        name='goal-date'
      >
        <MonthlyDateInput
          dateRange={dateRange}
          name='goal-date'
          onChange={date => handleInputChange({ date })}
          required
          value={date}
        />
      </FormControl>
    </>
  )
}

SavingGoalForm.propTypes = propTypes
