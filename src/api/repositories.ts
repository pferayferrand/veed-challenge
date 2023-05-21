import dayjs from 'dayjs'
import { GITHUB_API_URL } from '../config/constants'
import axios from 'axios'

export const getRepositories = async (page: number, language?: string) => {
  const from = dayjs().subtract(7, 'day').format('YYYY-MM-DD')
  const response = await axios.get(
    `${GITHUB_API_URL}?q=created:>${from}${
      language ? `+language:${language.toLowerCase()}` : ''
    }&sort=stars&order=desc&page=${page}`
  )
  return response.data
}
