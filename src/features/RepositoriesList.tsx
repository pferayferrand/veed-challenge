import { useState } from 'react'
import { useAppDispatch, useAppSelector } from '../redux/hooks'
import { fetchRepositories } from '../redux/slices/repositoriesSlice'
import { toggleFavorite } from '../redux/slices/favoritesSlice'
import Card from '../components/Card'

const RepositoryList = () => {
  const dispatch = useAppDispatch()
  const { data: repositories, isLoading } = useAppSelector(
    state => state.repositories
  )
  const [page, setPage] = useState(1) // keeping this value at component level in case we want to add pagination instead of load more button

  const loadMore = () => {
    dispatch(fetchRepositories({ page: page + 1 }))
    setPage(page + 1)
  }

  return page === 1 && isLoading ? (
    <p>Loading...</p>
  ) : (
    <>
      <div>
        {repositories.map(repo => (
          <Card
            key={repo.id}
            repo={repo}
            toggleFavorite={repo => dispatch(toggleFavorite(repo))}
          />
        ))}
      </div>
      {page > 1 && isLoading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <button onClick={() => loadMore()}>Load more</button>
        </div>
      )}
    </>
  )
}

export default RepositoryList
