import {
  buildAsyncState,
  buildAsyncActions,
  buildAsyncReducers,
} from '@thecodingmachine/redux-toolkit-wrapper'
import FetchOne from '@/Store/User/FetchOne'
import { navigateAndSimpleReset, navigate } from '@/Navigators/Root'
import DefaultTheme from '@/Store/Theme/DefaultTheme'
import { useAuth } from '@/Services/Auth/auth_provider'

export default {
  initialState: buildAsyncState(),
  action: buildAsyncActions('startup/init', async (args, { dispatch, getState }) => {
    const token = getState().auth.token
    console.log("STARTUP STATE:", token)

    // Timeout to fake waiting some process
    // Remove it, or keep it if you want display a beautiful splash screen ;)
    await new Promise(resolve => setTimeout(resolve, 3000))
    // Here we load the user 1 for example, but you can for example load the connected user
    
    await dispatch(DefaultTheme.action({ theme: 'default', darkMode: null }))
    console.log("Startup complete")
  }),
  reducers: buildAsyncReducers({ itemKey: null }), // We do not want to modify some item by default
}
