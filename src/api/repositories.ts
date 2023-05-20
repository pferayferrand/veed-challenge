import dayjs from 'dayjs'
import { GITHUB_API_URL } from '../config/constants'

export const getRepositories = async (page: number, language?: string) => {
  const from = dayjs().subtract(7, 'day').format('YYYY-MM-DD')
  const response = await fetch(
    `${GITHUB_API_URL}?q=created:>${from}${
      language ? `+language:${language.toLowerCase()}` : ''
    }&sort=stars&order=desc&page=${page}`
  )
  return await response.json()
}
