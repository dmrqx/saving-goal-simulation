import React, { useContext } from 'react'
import { arrayOf, instanceOf, func } from 'prop-types'

import { I18nContext } from '@origin/components/contexts'
import { useRelativeDate } from '@origin/hooks'
import { isDateWithinRange } from '@origin/utils/date'
import { Icon } from '@origin/components/ui'

import './MonthlyDateInput.module.css'

const propTypes = {
  dateRange: arrayOf(instanceOf(Date)),
  onChange: func.isRequired,
  value: instanceOf(Date).isRequired
}

const defaultProps = {
  dateRange: []
}

export default function MonthlyDateInput ({
  value: currentDate,
  dateRange,
  onChange
}) {
  const { formatDate: formatLocaleDate } = useContext(I18nContext)
  const { getNextMonth, getPastMonth } = useRelativeDate()
  const [month, year] = formatDate()

  function handleClick ({ type }) {
    let newDate

    switch (type) {
      case 'past':
        newDate = getPastMonth(currentDate)
        break
      case 'next':
        newDate = getNextMonth(currentDate)
        break
    }

    if (isDateWithinRange(newDate, dateRange)) onChange(newDate)
  }

  function formatDate () {
    const format = { month: 'long', year: 'numeric' }
    return formatLocaleDate(currentDate, format).split(' ')
  }

  return (
    <>
      <button
        className='btn'
        type='button'
        onClick={() => handleClick({ type: 'past' })}
      >
        <Icon name='chevron' />
      </button>
      <div>
        <p className='month'>{month}</p>
        <p className='year'>{year}</p>
      </div>
      <button
        className='btn'
        type='button'
        onClick={() => handleClick({ type: 'next' })}
      >
        <Icon name='chevron' />
      </button>
    </>
  )
}

MonthlyDateInput.propTypes = propTypes
MonthlyDateInput.defaultProps = defaultProps
