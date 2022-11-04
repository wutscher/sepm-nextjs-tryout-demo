import { render, screen } from '@testing-library/react'
import HomePage from '../app/page'
import '@testing-library/jest-dom'
import getNotes from '../pages/api/getNotes'
import { NextApiRequest } from 'next'

describe('Home', () => {
  it('renders a heading', () => {
    render(<HomePage />)

    const heading = screen.getByRole('heading', {
      name: /Seas/i,
    })

    expect(heading)//.toContain(<h1 class="text-3xl font-bold underline">Seas</h1>)
  })

})

describe('GetNotes', () => {
  it('returns Notes', () => {
    const req = {
      body: JSON.stringify({
        discount: .2,
        tax: .06,
        items: [
          {
            id: 1,
            price: 19.99,
            quantity: 2
          },
          {
            id: 2,
            price: 43.49,
            quantity: 1
          }
        ]
      })
    };
    const res = {
      status: () => ({
        json: () => {}
      })
    }
    getNotes(req, res)
  })

})
