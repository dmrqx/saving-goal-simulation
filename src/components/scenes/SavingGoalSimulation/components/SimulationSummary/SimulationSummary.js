import React from 'react'
import { string } from 'prop-types'

import { Box } from '@origin/components/ui'
import './SimulationSummary.module.css'

const propTypes = {
  deposit: string.isRequired,
  dueDate: string.isRequired,
  periodicity: string.isRequired,
  summary: string.isRequired,
  totalAmount: string.isRequired
}

export default function SimulationSummary ({
  deposit,
  dueDate,
  periodicity,
  summary,
  totalAmount
}) {
  const capitalizedPeriodicity = periodicity.replace(/^[a-z]/, match =>
    match.toUpperCase()
  )

  return (
    <Box tag='aside' styleName='simulation--summary'>
      <div styleName='box--content'>
        <h3 styleName='values'>
          <small>{capitalizedPeriodicity}</small>{' '}
          <span styleName='text__highlighted'>{deposit}</span>
        </h3>
      </div>
      <div styleName='box--footer'>
        <p styleName='description'>
          You're planning <strong>{summary}</strong> to reach your{' '}
          <strong>{totalAmount}</strong> goal by <strong>{dueDate}</strong>.
        </p>
      </div>
    </Box>
  )
}

SimulationSummary.propTypes = propTypes
