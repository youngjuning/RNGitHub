import React from 'react'
import { NavigationNativeContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import WelcomeScreen from '../screens/WelcomeScreen'

type RootStackParamsList = {
  WelcomeScreen: undefined
}

const RootStack = createStackNavigator<RootStackParamsList>()

export default () => {
  return (
    <NavigationNativeContainer>
      <RootStack.Navigator>
        <RootStack.Screen name="WelcomeScreen" component={WelcomeScreen} options={{ headerShown: false }} />
      </RootStack.Navigator>
    </NavigationNativeContainer>
  )
}
