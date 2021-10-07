import api from './Connection'
import { STATES } from './endpoints'
import handleError from '@/Services/utils/handleError'
import UpdateEntities from '@/Store/Entities/UpdateEntities'

export default async () => {  
  const response = await api.get(STATES)
  console.log("Got new entities:", response.data)
  return response.data
}