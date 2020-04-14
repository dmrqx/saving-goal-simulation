import React from 'react'
import { element, node, oneOfType, string } from 'prop-types'

import { Box } from '@origin/components/ui'
import { prependClass } from './FormControl.module.css'

const propTypes = {
  children: oneOfType([element, node]).isRequired,
  label: string,
  name: string.isRequired,
  prepend: string
}

export default function FormControl ({ children, label, name, prepend }) {
  const formControlClassNames = ['form-control', prepend && prependClass]
    .filter(className => Boolean(className))
    .join(' ')

  const formControlStyles = {
    ...(prepend && { '--prepend-content': `'${prepend}'` })
  }

  return (
    <Box tag='div' styleName='form-control-group'>
      {label && <label htmlFor={name}>{label}</label>}
      <div styleName={formControlClassNames} style={formControlStyles}>
        {children}
      </div>
    </Box>
  )
}

FormControl.propTypes = propTypes
