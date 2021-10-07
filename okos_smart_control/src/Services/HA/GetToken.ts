import api from '@/Services'
import handleError from '@/Services/utils/handleError'

export default async () => {

  const response = await api.get("")


  return response.data
}
