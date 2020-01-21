import React from 'react'
import { NavigationNativeContainer } from '@react-navigation/native'
import BottomTabNavigator from './BottomTabNavigator'

export default () => {
  return (
    <NavigationNativeContainer>
      <BottomTabNavigator />
    </NavigationNativeContainer>
  )
}
