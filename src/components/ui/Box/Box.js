import React from 'react'
import { string } from 'prop-types'

import './Box.module.css'

const propTypes = {
  tag: string.isRequired
}

export default function Box ({ tag: Tag, ...props }) {
  return <Tag {...props} styleName='box' />
}

Box.propTypes = propTypes
