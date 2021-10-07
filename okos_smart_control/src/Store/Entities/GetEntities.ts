import {
  buildAsyncState,
  buildAsyncActions,
  buildAsyncReducers,
} from '@thecodingmachine/redux-toolkit-wrapper'
import fetchEntitiesService from '@/Services/HA/GetEntities'

export default {
  initialState: buildAsyncState('entities/getEntities'),
  action: buildAsyncActions('entities/getEntities', fetchEntitiesService),
  reducers: buildAsyncReducers({ errorKey: 'getEntities.error', loadingKey: 'getEntities.loading' }),
}

