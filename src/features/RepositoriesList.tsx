import { useAppDispatch, useAppSelector } from '../redux/hooks'
import { fetchRepositories } from '../redux/slices/repositoriesSlice'
import { toggleFavorite } from '../redux/slices/favoritesSlice'
import Card from '../components/Card'
import Loading from '../components/Loading'
import { languages } from '../config/constants'

const RepositoryList = () => {
  const dispatch = useAppDispatch()
  const {
    data: repositories,
    isLoading,
    language,
    page,
  } = useAppSelector(state => state.repositories)

  const loadMore = () => {
    dispatch(fetchRepositories({ page: page, language }))
  }

  const setFilter = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value
    dispatch(fetchRepositories({ page: 1, language: value }))
  }

  return (
    <div>
      <select id="language" onChange={setFilter} value={language}>
        <option value="">No filter applied</option>
        {languages.map(language => (
          <option value={language} key={language}>
            {language}
          </option>
        ))}
      </select>
      {page === 1 && isLoading ? (
        <Loading />
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
            <Loading />
          ) : (
            <div>
              <button onClick={() => loadMore()}>Load more</button>
            </div>
          )}
        </>
      )}
    </div>
  )
}

export default RepositoryList
