import { createUseStyles } from 'react-jss'
import Card from '../components/Card'
import { useAppDispatch, useAppSelector } from '../redux/hooks'
import { toggleFavorite } from '../redux/slices/favoritesSlice'

const useStyles = createUseStyles({
  emptyList: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '50vh',
  },
})

const FavoritesList = () => {
  const classes = useStyles()
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
        <div className={classes.emptyList}>No favorites yet</div>
      )}
    </div>
  )
}

export default FavoritesList
