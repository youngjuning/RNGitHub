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
