import React from 'react'
import { render } from 'react-dom'

import { SavingGoalSimulation } from '@origin/components/scenes'
import './index.css'

const rootComponent = <SavingGoalSimulation />
const rootElement = document.getElementById('app')

render(rootComponent, rootElement)
