import {
  buildAsyncState,
  buildAsyncActions,
  buildAsyncReducers,
} from '@thecodingmachine/redux-toolkit-wrapper'
import { EntitiesState } from '@/Store/Entities'
import { createAction } from '@reduxjs/toolkit'

interface PayloadInterface {
  payload: EntitiesState
}

export default {
  initialState: buildAsyncState('entities/updateEntities'),
  action: createAction<Partial<EntitiesState>>('entities/updateEntities'),
  reducers(state: EntitiesState, { payload }: PayloadInterface) {

    console.log("TODO: Device reducer called", state, payload)

      state.loading = payload.loading
      state.entities = payload.entities
      state.rooms = payload.rooms
    
  }
}