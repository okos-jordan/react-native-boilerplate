import axios from 'axios'
import handleError from '@/Services/utils/handleError'
import { API_URL, auth_key } from '@/Services/HA/endpoints'

const instance = axios.create({
  baseURL: API_URL,
  headers: {
    'Accept': 'application/json',
    'Authorization': `Bearer ${auth_key}`,
    'Content-Type': 'application/json',
  },
  timeout: 3000,
})

instance.interceptors.response.use(
  response => response,
  ({ message, response: { data, status } }) => {
    return handleError({ message, data, status })
  },
)


export default instance
