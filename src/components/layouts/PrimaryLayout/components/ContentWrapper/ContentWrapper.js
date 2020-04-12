import React from 'react'
import { element, node, oneOfType, string } from 'prop-types'

import './ContentWrapper.module.css'

const propTypes = {
  children: oneOfType([element, node]).isRequired,
  pageTitle: oneOfType([element, node, string]).isRequired
}

export default function ContentWrapper ({ children, pageTitle }) {
  return (
    <main>
      <h1>{pageTitle}</h1>
      {children}
    </main>
  )
}

ContentWrapper.propTypes = propTypes
