import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import { ScreenStack } from 'react-native-screens'
import HomePage from '../screens/HomePage'
import ConnectPage from '../screens/ConnectPage'
import RegisterPage from '../screens/RegisterPage'
import SuccessPage from '../screens/SuccessPage'
import RegisterStep2 from '../screens/RegisterStep2'

const Stack = createNativeStackNavigator()
const HomeNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomePage} />
        <Stack.Screen name="Connect" component={ConnectPage} />
        <Stack.Screen name="Register" component={RegisterPage} />
        <Stack.Screen name="RegisterStep2" component={RegisterStep2} />
        <Stack.Screen name="Success" component={SuccessPage} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default HomeNavigation
