import { createAction } from '@reduxjs/toolkit'
import { AuthState } from '@/Store/Auth/index'
import { navigateAndSimpleReset, navigate } from '@/Navigators/Root'

interface PayloadInterface {
  payload: Partial<AuthState>
}

export default {
  initialState: {},
  action: createAction<Partial<AuthState>>('auth/signin'),
  reducers(state: AuthState, { payload }: PayloadInterface) {
    console.log("Signin Payload: ", payload)
    if (typeof payload.token !== 'undefined') {
      state.token = payload.token
    }
  },
}
