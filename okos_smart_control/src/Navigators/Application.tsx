import React, { useEffect, useState, FunctionComponent } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import {
  IndexStartupContainer, 
   } from '@/Containers'
import { useSelector, shallowEqual } from 'react-redux'
import { NavigationContainer } from '@react-navigation/native'
import { navigationRef } from '@/Navigators/Root'
import { SafeAreaView, StatusBar } from 'react-native'
import { useTheme } from '@/Theme'
import { StartupState } from '@/Store/Startup'
import { State } from 'react-native-gesture-handler'
import AuthProvider, { useAuth } from '@/Services/Auth/auth_provider'
import MainNavigator from '@/Navigators/Main'
import AuthNavigator from '@/Navigators/Auth'
import { AuthState } from '@/Store/Auth'

const Stack = createStackNavigator()

// @refresh reset
const ApplicationNavigator = () => {
  const { Layout, darkMode, NavigationTheme } = useTheme()
  const { colors } = NavigationTheme
  const [isApplicationLoaded, setIsApplicationLoaded] = useState(false)
  const applicationIsLoading = useSelector(
    (state: { startup: StartupState }) => state.startup.loading)

  const token = useSelector((state: { auth: AuthState }) => state.auth.token)

  console.log("USER in Application Nav:", token)
  useEffect(() => {
    if (MainNavigator != null && AuthNavigator != null) {
      setIsApplicationLoaded(true)
    } 
  }, [applicationIsLoading])

  // on destroy needed to be able to reset when app close in background (Android)
  useEffect(
    () => () => {
      setIsApplicationLoaded(false)
      //TODO: Need to clear user data
    },
    [],
  )

  if (!isApplicationLoaded){
    return (
        <IndexStartupContainer />
       )
    }

  return (
    <SafeAreaView style={[Layout.fill, { backgroundColor: colors.card }]}>
        <AuthProvider>
        <NavigationContainer theme={NavigationTheme} ref={navigationRef}>
        <Stack.Navigator headerMode={'none'}>
          
          { token != null ? 
          (  <Stack.Screen
            name="Main"
            component={MainNavigator}
            options={{
              animationEnabled: false,
            }}
          />) : 
          (  <Stack.Screen
            name="Auth"
            component={AuthNavigator}
            options={{
              animationEnabled: false,
            }}
          />) 
          }  
          </Stack.Navigator>
          </NavigationContainer>
        </AuthProvider>
    </SafeAreaView>
  )
}

export default ApplicationNavigator
