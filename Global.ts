import { Dimensions, Platform } from 'react-native'
import { getStatusBarHeight } from 'react-native-status-bar-height'
import { Header } from '@react-navigation/stack'

Global.windowWidth = Dimensions.get('window').width
Global.windowHeight = Dimensions.get('window').height
Global.statusBarHeight = getStatusBarHeight()
// @ts-ignore
Global.headerHeight = Header.HEIGHT
Global.ios = Platform.OS === 'ios'
Global.android = Platform.OS === 'android'
