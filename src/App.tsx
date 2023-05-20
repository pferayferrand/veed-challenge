import { useEffect } from 'react'
import './App.css'
import Card from './components/Card'
import { useAppDispatch, useAppSelector } from './redux/hooks'
import { fetchRepositories } from './redux/slices/repositoriesSlice'
import { toggleFavorite } from './redux/slices/favoritesSlice'

const App = () => {
  const dispatch = useAppDispatch()
  const repositories = useAppSelector(state => state.repositories)

  useEffect(() => {
    dispatch(fetchRepositories())
  }, [])

  return (
    <div>
      <h1>Veed challenge</h1>
      <div>
        {repositories.map(repo => (
          <Card
            key={repo.id}
            repo={repo}
            toggleFavorite={repo => dispatch(toggleFavorite(repo))}
          />
        ))}
      </div>
    </div>
  )
}

export default App
