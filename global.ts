import { Dimensions, Platform } from 'react-native'
import { getStatusBarHeight } from 'react-native-status-bar-height'
import { Header } from '@react-navigation/stack'

global.windowWidth = Dimensions.get('window').width
global.windowHeight = Dimensions.get('window').height
global.statusBarHeight = getStatusBarHeight()
// @ts-ignore
global.headerHeight = Header.HEIGHT
global.ios = Platform.OS === 'ios'
global.android = Platform.OS === 'android'
