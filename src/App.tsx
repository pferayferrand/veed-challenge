import { useEffect, useState } from 'react'
import RepositoryList from './features/RepositoriesList'
import { useAppDispatch } from './redux/hooks'
import { fetchRepositories } from './redux/slices/repositoriesSlice'
import FavoritesList from './features/FavoritesList'
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
  main: {
    paddingLeft: 32,
    paddingRight: 32,
  },
  title: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  options: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  slider: {
    marginBottom: 16,
  },
})

const App = () => {
  const classes = useStyles()
  const dispatch = useAppDispatch()
  const [showFavorites, setShowFavorites] = useState(false)

  useEffect(() => {
    dispatch(fetchRepositories({ page: 1 }))
  }, [])

  return (
    <main className={classes.main}>
      <h1 className={classes.title}>Veed challenge</h1>
      <div className={classes.slider}>
        <label htmlFor="showFavorites">
          <input
            type="checkbox"
            id="showFavorites"
            name="showFavorites"
            role="switch"
            onClick={() => setShowFavorites(!showFavorites)}
          />
          Show favorite repositories
        </label>
      </div>
      {showFavorites ? <FavoritesList /> : <RepositoryList />}
    </main>
  )
}

export default App
