import { screen } from '@testing-library/react'

describe('index.js', () => {
  test('app renders without crashing', () => {
    require('./index')

    const sceneTitle = screen.getByText(/saving goal/i)
    expect(sceneTitle).toBeInTheDocument()
  })
})
