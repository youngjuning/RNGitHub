import React from 'react'
import { NavigationNativeContainer } from '@react-navigation/native'
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icon from '../iconfont/Icon'
import LargeListScreen from '../screens/LargeListScreen'

export type RootStackParamList = {
  LargeListScreen: undefined
}

const RootStack = createStackNavigator<RootStackParamList>()
const RootStackScreen = () => (
  <RootStack.Navigator
    initialRouteName="LargeListScreen"
    screenOptions={{
      headerStyle: {
        backgroundColor: '#ffffff',
      }, // 一个应用于 header 的最外层 View 的 样式对象
      headerTintColor: '#000000', // 返回按钮和标题都使用这个属性作为它们的颜色
      headerTitleStyle: {
        fontWeight: 'bold',
      },
      headerBackTitleVisible: false,
      headerTitleAlign: 'center',
      cardStyle: {
        backgroundColor: '#f5f5f9',
      },
      ...TransitionPresets.SlideFromRightIOS,
    }}
  >
    <RootStack.Screen name="LargeListScreen" component={LargeListScreen} />
  </RootStack.Navigator>
)
const BottomTab = createBottomTabNavigator()

export default () => {
  return (
    <NavigationNativeContainer>
      <BottomTab.Navigator>
        <BottomTab.Screen
          name="Root"
          component={RootStackScreen}
          options={{
            tabBarLabel: '最热',
            tabBarIcon: ({ focused, color, size }) => <Icon name={focused ? 'add' : 'add1'} size={size} />,
          }}
        ></BottomTab.Screen>
      </BottomTab.Navigator>
    </NavigationNativeContainer>
  )
}
