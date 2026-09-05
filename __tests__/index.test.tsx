import { render, screen } from '@testing-library/react'
import Home from '../app/page'

describe('Home', () => {
  it('renders main element', () => {
    render(<Home />)
    // Use getAllByRole to avoid failure when role landmarks are handled differently in CI
    expect(screen.getAllByRole('main').length).toBeGreaterThan(0)
  })
})
