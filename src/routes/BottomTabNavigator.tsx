import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import getScreenOptions from './utils/getScreenOptions'
import TrendingScreen from '../screens/TrendingScreen'
import FavoriteScreen from '../screens/FavoriteScreen'
import PopularScreen from '../screens/PopularScreen'
import Icon from '../iconfont/Icon'
import { RootStackParamList } from './StackParamList'
import MineScreen from '../screens/MineScreen'

const Stack = createStackNavigator<RootStackParamList>()

const TrendingStackScreen = () => (
  <Stack.Navigator
    // @ts-ignore
    screenOptions={{ ...getScreenOptions() }}
  >
    <Stack.Screen name="TrendingScreen" component={TrendingScreen} />
  </Stack.Navigator>
)
const FavoriteStackScreen = () => (
  <Stack.Navigator
    // @ts-ignore
    screenOptions={{ ...getScreenOptions() }}
  >
    <Stack.Screen name="FavoriteScreen" component={FavoriteScreen} />
  </Stack.Navigator>
)
const PopularStackScreen = () => (
  <Stack.Navigator
    // @ts-ignore
    screenOptions={{ ...getScreenOptions() }}
  >
    <Stack.Screen
      name="PopularScreen"
      component={PopularScreen}
      options={{
        headerShown: false,
      }}
    />
  </Stack.Navigator>
)
const MineStackScreen = () => (
  <Stack.Navigator
    // @ts-ignore
    screenOptions={{ ...getScreenOptions() }}
  >
    <Stack.Screen name="MineScreen" component={MineScreen} />
  </Stack.Navigator>
)

const BottomTab = createBottomTabNavigator()

const BottomTabNavigator = () => (
  <BottomTab.Navigator
    tabBarOptions={{
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    }}
    initialRouteName="HomeStackScreen"
  >
    <BottomTab.Screen
      name="PopularStackScreen"
      component={PopularStackScreen}
      options={{
        tabBarLabel: '最热',
        tabBarIcon: ({ focused, color, size }) => <Icon name={focused ? 'remen' : 'remen'} size={size} color={color} />,
      }}
    />
    <BottomTab.Screen
      name="TrendingStackScreen"
      component={TrendingStackScreen}
      options={{
        tabBarLabel: '趋势',
        tabBarIcon: ({ focused, color, size }) => (
          <Icon name={focused ? 'shuju1' : 'shuju'} size={size} color={color} />
        ),
      }}
    />
    <BottomTab.Screen
      name="FavoriteStackScreen"
      component={FavoriteStackScreen}
      options={{
        tabBarLabel: '收藏',
        tabBarIcon: ({ focused, color, size }) => (
          <Icon name={focused ? 'aixin1' : 'aixin'} size={size} color={color} />
        ),
      }}
    />
    <BottomTab.Screen
      name="MineStackScreen"
      component={MineStackScreen}
      options={{
        tabBarLabel: '我的',
        tabBarIcon: ({ focused, color, size }) => <Icon name={focused ? 'wode1' : 'wode'} size={size} color={color} />,
      }}
    />
  </BottomTab.Navigator>
)

export default BottomTabNavigator
