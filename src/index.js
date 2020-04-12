import React from 'react'
import { render } from 'react-dom'

import { PrimaryLayout } from '@origin/components/layouts'
import './index.css'

const pageTitle = (
  <>
    Let's plan your <strong>saving goal.</strong>
  </>
)

const rootComponent = (
  <PrimaryLayout pageTitle={pageTitle}>
    <div>Some content</div>
  </PrimaryLayout>
)
const rootElement = document.getElementById('app')

render(rootComponent, rootElement)
