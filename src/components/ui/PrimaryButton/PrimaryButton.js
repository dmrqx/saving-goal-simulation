import React from 'react'

import './PrimaryButton.module.css'

export default function PrimaryButton (props) {
  return (
    <button
      form='saving-goal-simulation'
      className='btn'
      styleName='primary-button primary-button__block'
    >
      Confirm
    </button>
  )
}
