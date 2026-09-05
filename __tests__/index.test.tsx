import { render, screen } from '@testing-library/react'
import Home from '../app/page'
// Mock heavy child components to avoid CI-specific module resolution / runtime differences
jest.mock('@/components/site-header', () => {
  const React = require('react')
  return { SiteHeader: () => React.createElement('div', { 'data-testid': 'site-header' }) }
})
jest.mock('@/components/hero', () => {
  const React = require('react')
  return { Hero: () => React.createElement('div', { 'data-testid': 'hero' }) }
})
jest.mock('@/components/brand-intro', () => {
  const React = require('react')
  return { BrandIntro: () => React.createElement('div', { 'data-testid': 'brand-intro' }) }
})
jest.mock('@/components/collections', () => {
  const React = require('react')
  return { Collections: () => React.createElement('div', { 'data-testid': 'collections' }) }
})
jest.mock('@/components/atelier', () => {
  const React = require('react')
  return { Atelier: () => React.createElement('div', { 'data-testid': 'atelier' }) }
})
jest.mock('@/components/sustainability', () => {
  const React = require('react')
  return { Sustainability: () => React.createElement('div', { 'data-testid': 'sustainability' }) }
})
jest.mock('@/components/careers', () => {
  const React = require('react')
  return { Careers: () => React.createElement('div', { 'data-testid': 'careers' }) }
})
jest.mock('@/components/site-footer', () => {
  const React = require('react')
  return { SiteFooter: () => React.createElement('footer', { 'data-testid': 'site-footer' }) }
})

describe('Home', () => {
  it('renders main element', () => {
    render(<Home />)
    // Use getAllByRole to avoid failure when role landmarks are handled differently in CI
    expect(screen.getAllByRole('main').length).toBeGreaterThan(0)
  })
})
