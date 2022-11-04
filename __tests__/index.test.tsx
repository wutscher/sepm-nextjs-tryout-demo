import { render, screen } from '@testing-library/react'
import HomePage from '../app/page'
import '@testing-library/jest-dom'

describe('Home', () => {
  it('renders a heading', () => {
    render(<HomePage />)

    const heading = screen.getByRole('heading', {
      name: /Seas/i,
    })

    expect(heading)//.toContain(<h1 class="text-3xl font-bold underline">Seas</h1>)
  })
})