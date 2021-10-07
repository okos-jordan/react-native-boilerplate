import { buildSlice } from '@thecodingmachine/redux-toolkit-wrapper'
import UpdateEntities from './UpdateEntities'
import GetEntities from '@/Store/Entities/GetEntities'

export default buildSlice('entities', [UpdateEntities, GetEntities], {
  loading: false,
  entities: [],
  rooms: []
}).reducer

export interface EntitiesState {
  loading: boolean
  entities: []
  rooms: []
}
