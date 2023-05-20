import { CgSpinner } from 'react-icons/cg'
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
  '@keyframes spin': {
    to: { transform: 'rotate(360deg)' },
  },
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    marginBottom: 16,
  },
  loader: {
    animation: '$spin 1s linear infinite',
    width: 64,
    height: 64,
  },
})

const Loading = () => {
  const classes = useStyles()
  return (
    <div className={classes.container}>
      <CgSpinner className={classes.loader} />
    </div>
  )
}

export default Loading
