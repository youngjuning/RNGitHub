/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, { useEffect } from 'react'
import { StatusBar } from 'react-native'
import SplashScreen from 'react-native-splash-screen'
import AppContainer from './src/routes/AppContainer'

const App = () => {
  useEffect(() => {
    SplashScreen.hide()
  }, [])

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <AppContainer />
    </>
  )
}

export default App
