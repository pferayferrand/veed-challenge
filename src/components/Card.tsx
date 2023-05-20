import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
dayjs.extend(relativeTime)
import type Repository from '../types/repository'

const Card = ({
  repo,
  toggleFavorite,
}: {
  repo: Repository
  toggleFavorite: (repo: Repository) => void
}) => {
  const {
    id,
    full_name,
    html_url,
    description,
    stars,
    language,
    created_at,
    is_favorite,
  } = repo
  return (
    <div>
      <div>{id}</div>
      <div>{full_name}</div>
      <div>{html_url}</div>
      <div>{description}</div>
      <div>{stars}</div>
      <div>{language}</div>
      <div>{dayjs(created_at).fromNow()}</div>
      <div>{is_favorite}</div>
      <button onClick={() => toggleFavorite(repo)}>
        Set as favorite: {is_favorite ? 'True' : 'False'}
      </button>
      <div>----------------</div>
    </div>
  )
}

export default Card
