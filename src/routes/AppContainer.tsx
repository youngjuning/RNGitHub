import React from 'react'
import { NavigationNativeContainer } from '@react-navigation/native'
import { StatusBar } from 'react-native'
import BottomTabNavigator from './BottomTabNavigator'
import getActiveRouteName from './utils/getActiveRouteName'

export default () => {
  const routeNameRef = React.useRef()
  return (
    <NavigationNativeContainer
      onStateChange={state => {
        const previousRouteName = routeNameRef.current
        const currentRouteName = getActiveRouteName(state)
        if (previousRouteName !== currentRouteName) {
          console.log('[onStateChange]', currentRouteName)
          if (currentRouteName === 'PopularScreen') {
            global.android && StatusBar.setBackgroundColor('#f5f5f9')
            StatusBar.setBarStyle('dark-content')
          } else {
            global.android && StatusBar.setBackgroundColor('#ffffff')
            StatusBar.setBarStyle('dark-content')
          }
        }
      }}
    >
      <BottomTabNavigator />
    </NavigationNativeContainer>
  )
}
