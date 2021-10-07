import { findNonSerializableValue } from '@reduxjs/toolkit'
import { buildSlice } from '@thecodingmachine/redux-toolkit-wrapper'
import RestoreToken from './RestoreToken'
import SignIn from './SignIn'
import SignOut from './SignOut'

export default buildSlice('auth', [RestoreToken, SignIn, SignOut], {
  name: null,
  user: null,
  role: null,
  token: null,
  timestamp: null
}).reducer

export interface AuthState {
  name: string | null
  user: string | null
  role: string | null
  token: string | null
  timestamp: string | null
}
