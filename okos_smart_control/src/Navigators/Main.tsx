import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import {
  IndexHomeContainer,
  IndexAccountContainer,
  IndexSettingsContainer,
  IndexDevicesContainer,
} from '@/Containers'
import { navigationRef } from '@/Navigators/Root'

const Stack = createStackNavigator()

// @refresh reset
export default function MainNavigator() {
  return (
      <Stack.Navigator initialRouteName="Home" headerMode={'none'}>
        <Stack.Screen name="Home" component={IndexHomeContainer} />
        <Stack.Screen name="Account" component={IndexAccountContainer} />
        <Stack.Screen name="Settings" component={IndexSettingsContainer} />
        <Stack.Screen name="Device" component={IndexDevicesContainer} />
      </Stack.Navigator>
  )
}
