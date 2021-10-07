import api from './Connection'
import handleError from '@/Services/utils/handleError'
import { SERVICE } from './endpoints'



export default async (entity_id: string) => {
  const splitEntity = entity_id.split('.')
  
  const domain = splitEntity[0]
  const name = splitEntity[1]

  console.log("POST UPDATE DEVICE > ", domain, " > ", name)
  const response = await api.post(SERVICE(domain, 'toggle'), {"entity_id": entity_id })

  return response.data
}
