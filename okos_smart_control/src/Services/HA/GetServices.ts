import api from './Connection'
import { PING, CONFIG, EVENTS, SERVICES, HISTORY, LOGBOOK, STATES, ENTITY } from './endpoints'
import handleError from '@/Services/utils/handleError'

export default async () => {
  console.log("GET SERVICES")
  const response = await api.get(SERVICES)
  return response.data
}
