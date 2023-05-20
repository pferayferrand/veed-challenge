import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
dayjs.extend(relativeTime)
import type Repository from '../types/repository'
import { createUseStyles } from 'react-jss'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'
import { IoTimer } from 'react-icons/io5'
import { FaLaptopCode } from 'react-icons/fa'

const useStyles = createUseStyles({
  article: {
    padding: 16,
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  leftContainer: {
    display: 'flex',
    flexDirection: 'column',
  },
  repoTitle: {
    marginBottom: 4,
  },
  text: {
    display: 'flex',
    alignItems: 'center',
    marginRight: 16,
  },
  flex: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 8,
  },
  button: {
    display: 'flex',
    alignItems: 'center',
    paddingTop: 4,
    paddingBottom: 4,
  },
  icon: {
    marginRight: 4,
  },
})

const Card = ({
  repo,
  toggleFavorite,
}: {
  repo: Repository
  toggleFavorite: (repo: Repository) => void
}) => {
  const {
    full_name,
    html_url,
    description,
    stars,
    language,
    created_at,
    is_favorite,
  } = repo
  const classes = useStyles()

  return (
    <article className={classes.article}>
      <div className={classes.container}>
        <div className={classes.leftContainer}>
          <h4 className={classes.repoTitle}>
            <a href={html_url}>{full_name}</a>
          </h4>
          <small>{description}</small>
          <div className={classes.flex}>
            <div className={classes.text}>
              <AiFillStar className={classes.icon} /> {stars}
            </div>
            <div className={classes.text}>
              <IoTimer className={classes.icon} /> {dayjs(created_at).fromNow()}
            </div>
            {language && (
              <div className={classes.text}>
                <FaLaptopCode className={classes.icon} /> {language}
              </div>
            )}
          </div>
        </div>
        <div>
          <button
            onClick={() => toggleFavorite(repo)}
            className={classes.button}
          >
            {is_favorite ? (
              <AiFillStar className={classes.icon} />
            ) : (
              <AiOutlineStar className={classes.icon} />
            )}{' '}
            Star
          </button>
        </div>
      </div>
    </article>
  )
}

export default Card
