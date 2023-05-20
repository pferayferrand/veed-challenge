import { useEffect, useState } from 'react'
import RepositoryList from './features/RepositoriesList'
import { useAppDispatch } from './redux/hooks'
import { fetchRepositories } from './redux/slices/repositoriesSlice'
import FavoritesList from './features/FavoritesList'
import { css } from '@emotion/react'

const App = () => {
  const dispatch = useAppDispatch()
  const [showFavorites, setShowFavorites] = useState(false)

  useEffect(() => {
    dispatch(fetchRepositories({ page: 1 }))
  }, [])

  return (
    <main
      css={css`
        padding-left: 32px;
        padding-right: 32px;
      `}
    >
      <h1>Veed challenge</h1>
      <label htmlFor="showFavorites">
        <input
          type="checkbox"
          id="showFavorites"
          name="showFavorites"
          role="switch"
          onClick={() => setShowFavorites(!showFavorites)}
        />
        Show favorited repositories
      </label>
      {showFavorites ? <FavoritesList /> : <RepositoryList />}
    </main>
  )
}

export default App
