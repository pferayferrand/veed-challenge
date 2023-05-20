import Card from '../components/Card'
import { useAppDispatch, useAppSelector } from '../redux/hooks'
import { toggleFavorite } from '../redux/slices/favoritesSlice'

const FavoritesList = () => {
  const dispatch = useAppDispatch()
  const favorites = useAppSelector(state => state.favorites)

  return (
    <div>
      {favorites.length > 0 ? (
        favorites.map(repo => (
          <Card
            key={repo.id}
            repo={repo}
            toggleFavorite={repo => dispatch(toggleFavorite(repo))}
          />
        ))
      ) : (
        <p>No favorites yet</p>
      )}
    </div>
  )
}

export default FavoritesList
