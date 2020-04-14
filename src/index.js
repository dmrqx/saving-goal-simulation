import React from 'react'
import { render } from 'react-dom'

import App from '@origin/components'
import './index.css'

const rootComponent = <App />
const rootElement = document.getElementById('app')

render(rootComponent, rootElement)
