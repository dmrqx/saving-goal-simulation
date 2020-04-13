import React from 'react'
import { string } from 'prop-types'

import { Icon } from '@origin/components/ui'
import './SavingGoalHeader.module.css'

const propTypes = {
  type: string,
  objective: string.isRequired
}

export default function SavingGoalHeader ({ type, objective }) {
  return (
    <header styleName='simulation-header'>
      {type && <Icon name={type} />}
      <legend>
        <h2 styleName='simulation-title'>{objective}</h2>{' '}
        <span styleName='simulation-subtitle'>Saving goal</span>
      </legend>
    </header>
  )
}

SavingGoalHeader.propTypes = propTypes
