import React, { useEffect, useState, FunctionComponent } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import { navigationRef } from '@/Navigators/Root'

//IMPORT SCENES
import RegisterScreen from '@/Containers/Auth/Register'
import LoginScreen from '@/Containers/Auth/Login'
import UsernameScreen from '@/Containers/Auth/Username'
import ForgotPasswordScreen from '@/Containers/Auth/ForgotPassword'

const Auth = createStackNavigator()

// @refresh reset
export default function AuthNavigator() {
  return (
      <Auth.Navigator initialRouteName="Login" headerMode={'none'}>
        <Auth.Screen name="Register" component={RegisterScreen} />
        <Auth.Screen name="Login" component={LoginScreen} />
        <Auth.Screen name="Username" component={UsernameScreen} />
        <Auth.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
      </Auth.Navigator>
  )
}
