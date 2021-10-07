import { createAction } from '@reduxjs/toolkit'
import { AuthState } from '@/Store/Auth/index'

interface PayloadInterface {
  payload: Partial<AuthState>
}

export default {
  initialState: {},
  action: createAction<Partial<AuthState>>('auth/restoretoken'),
  reducers(state: AuthState, { payload }: PayloadInterface) {
    console.log("Payload:", payload)
    if (typeof payload.token !== 'undefined') {
      state.token = payload.token
    }

    //state.isLoading = false
  },
}
