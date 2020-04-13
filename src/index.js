import React from 'react'
import { render } from 'react-dom'

import { PrimaryLayout } from '@origin/components/layouts'
import { Box } from '@origin/components/ui'
import './index.css'

const pageTitle = (
  <>
    Let's plan your <strong>saving goal.</strong>
  </>
)

const rootComponent = (
  <PrimaryLayout pageTitle={pageTitle}>
    <Box tag='section'>Some content</Box>
  </PrimaryLayout>
)
const rootElement = document.getElementById('app')

render(rootComponent, rootElement)
