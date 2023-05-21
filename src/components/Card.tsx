import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
dayjs.extend(relativeTime)
import type Repository from '../types/repository'
import { createUseStyles } from 'react-jss'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'
import { IoTimer } from 'react-icons/io5'
import { FaLaptopCode } from 'react-icons/fa'
import { RiGitRepositoryLine } from 'react-icons/ri'

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
    display: 'flex',
    alignItems: 'center',
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
    '@media (max-width: 576px)': {
      padding: 4,
    },
  },
  buttonText: {
    marginLeft: 8,
    '@media (max-width: 576px)': {
      display: 'none',
    },
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
            <RiGitRepositoryLine className={classes.icon} />
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
              <AiFillStar data-testid="fill-star" />
            ) : (
              <AiOutlineStar data-testid="outline-star" />
            )}
            <div className={classes.buttonText}>Star</div>
          </button>
        </div>
      </div>
    </article>
  )
}

export default Card
