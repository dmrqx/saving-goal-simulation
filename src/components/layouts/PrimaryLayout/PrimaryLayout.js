import React from 'react'
import { element, node, oneOfType, string } from 'prop-types'

import { ContentWrapper, Footer, Header } from './components'
import './PrimaryLayout.module.css'

const propTypes = {
  children: oneOfType([element, node]).isRequired,
  pageTitle: oneOfType([element, node, string]).isRequired
}

function PrimaryLayout ({ children, pageTitle }) {
  return (
    <>
      <Header />
      <ContentWrapper pageTitle={pageTitle}>{children}</ContentWrapper>
      <Footer />
    </>
  )
}
export default PrimaryLayout

PrimaryLayout.propTypes = propTypes
