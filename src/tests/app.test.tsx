import { describe, expect, it } from 'vitest'
import App from '../App'
import { screen } from '@testing-library/react'
import { renderWithProviders } from './test-utils'

const preloadedState = {
  favorites: [
    {
      id: 642323624,
      full_name: 'XingangPan/DragGAN',
      description: 'Code for DragGAN (SIGGRAPH 2023)',
      html_url: 'https://github.com/XingangPan/DragGAN',
      stars: 4670,
      language: '',
      created_at: '2023-05-18T10:08:02Z',
      is_favorite: true,
    },
  ],
}

describe('landing on the app (no favorites in localstorage)', () => {
  it('should render the title', async () => {
    renderWithProviders(<App />)
    expect(screen.getByText('Veed Challenge')).toBeInTheDocument()
  })

  it('should render the list of repositores (with none favorited)', async () => {
    renderWithProviders(<App />)
    expect(await screen.findByTestId('outline-star')).toBeInTheDocument()
  })

  it('should save to favorites when button is clicked (and see it in favorites list)', async () => {
    renderWithProviders(<App />)
    // Set repo as favorite
    const button = await screen.findByText('Star')
    button.click()
    expect(await screen.findByTestId('fill-star')).toBeInTheDocument()

    // Go to favorites list
    const showFavorites = await screen.findByText('Show favorite repositories')
    showFavorites.click()
    expect(await screen.findByText('XingangPan/DragGAN')).toBeInTheDocument()

    // Come back to repostiories list with repo marked as favorite
    showFavorites.click()
    expect(await screen.findByTestId('fill-star')).toBeInTheDocument()
  })
})

describe('landing on the app (with favorites in localstorage)', () => {
  it('should render the list of repositores with repo already marked as favorite', async () => {
    renderWithProviders(<App />, {
      preloadedState,
    })
    expect(await screen.findByTestId('fill-star')).toBeInTheDocument()

    // Go to favorites list
    const showFavorites = await screen.findByText('Show favorite repositories')
    showFavorites.click()
    expect(await screen.findByText('XingangPan/DragGAN')).toBeInTheDocument()

    // Remove repo from favorites (from favorite list)
    const button = await screen.findByText('Star')
    button.click()
    expect(await screen.findByText('No favorites yet')).toBeInTheDocument()

    // Come back to repostiories list with repo not marked as favorite aymore
    showFavorites.click()
    expect(await screen.findByTestId('outline-star')).toBeInTheDocument()
  })
})
