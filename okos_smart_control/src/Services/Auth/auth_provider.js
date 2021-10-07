import React, { useMemo, useState, useReducer, useContext } from 'react'
import { useDispatch, useSelector } from 'react-redux'
//import {AsyncStorage} from "react-native";
import axios from 'axios'

//IMPORT REDUCER, INITIAL STATE AND ACTION TYPES
//import reducer, {initialState, LOGGED_IN, LOGGED_OUT} from "./reducer";
import RestoreToken from '@/Store/Auth/RestoreToken'
import SignIn from '@/Store/Auth/SignIn'
import SignOut from '@/Store/Auth/SignOut'

// CONFIG KEYS [Storage Keys]===================================
export const TOKEN_KEY = 'token'
export const USER_KEY = 'user'
export const keys = [TOKEN_KEY, USER_KEY]

// CONTEXT ===================================
const AuthContext = React.createContext()

function AuthProvider(props) {
  const dispatch = useDispatch()
  const [state, setState] = useState({});

  // Get Auth state
  const getAuthState = async () => {
    try {
      //GET TOKEN && USER
      const token = useSelector(state => state.auth.token)
      const user = useSelector(state => state.auth.user)
      user = JSON.parse(user)

      if (token !== null && user !== null) {
        await handleLogin({ token, user })
      } else {
        await handleLogout()
      }

      return { token, user }
    } catch (error) {
      throw new Error(error)
    }
  }

  // Handle Login
  const handleLogin = async data => {
    try {
      //STORE DATA
      let { name, email, token, role } = data
 
      console.log("> Handeled Login:", data)
      //await AsyncStorage.multiSet(data_);
      //dispatch(RestoreToken.action(token))

      //AXIOS AUTHORIZATION HEADER
      axios.defaults.headers.common.Authorization = `Bearer ${data.token}`

      //DISPATCH TO REDUCER
      dispatch(SignIn.action(data))
    } catch (error) {
      throw new Error(error)
    }
  }

  // Handle Logout
  const handleLogout = async () => {
    try {
      //REMOVE DATA
      //await AsyncStorage.multiRemove(keys);

      //AXIOS AUTHORIZATION HEADER
      delete axios.defaults.headers.common.Authorization

      //DISPATCH TO REDUCER
      dispatch(SignOut.action())
    } catch (error) {
      throw new Error(error)
    }
  }

  //UPDATE USER LOCAL STORAGE DATA AND DISPATCH TO REDUCER
  const updateUser = async user => {
    try {
      //await AsyncStorage.setItem(USER_KEY, JSON.stringify(user));
      dispatch(SignIn.action(user)) //DISPATCH TO REDUCER
    } catch (error) {
      throw new Error(error)
    }
  }

  const value = useMemo(() => {
    return { state, getAuthState, handleLogin, handleLogout, updateUser }
  }, [state])

  return (
    <AuthContext.Provider value={value} >{props.children}</AuthContext.Provider>
  )
}

const useAuth = () => useContext(AuthContext)
export { AuthContext, useAuth }
export default AuthProvider
