import React from 'react'
import { View, StyleSheet, StatusBar } from 'react-native'
import { RouteProp } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { TabView, SceneMap } from 'react-native-tab-view'
import { observable, action } from 'mobx'
import { observer } from 'mobx-react'
import { RootStackParamList } from '../routes/StackParamList'

type PopularScreenNavigationProp = StackNavigationProp<RootStackParamList, 'PopularScreen'>
type PopularScreenRouteProp = RouteProp<RootStackParamList, 'PopularScreen'>
type Props = {
  navigation: PopularScreenNavigationProp
  route: PopularScreenRouteProp
}

const FirstRoute = () => <View style={[styles.scene, { backgroundColor: '#ff4081' }]} />
const SecondRoute = () => <View style={[styles.scene, { backgroundColor: '#673ab7' }]} />
const routes = [
  { key: 'first', title: 'First' },
  { key: 'second', title: 'Second' },
]
class TabViewStore {
  @observable tabIndex = 0

  @action setTabIndex = tabIndex => {
    this.tabIndex = tabIndex
  }
}

@observer
export default class PopularScreen extends React.Component<Props> {
  tabViewStore: TabViewStore
  constructor(props: Props) {
    super(props)
    this.tabViewStore = new TabViewStore()
  }

  render() {
    const { tabIndex, setTabIndex } = this.tabViewStore
    return (
      <View style={{ flex: 1, paddingTop: global.statusBarHeight, backgroundColor: '#2196f3' }}>
        <StatusBar backgroundColor="#2196f3" barStyle="light-content" />
        <TabView
          navigationState={{ index: tabIndex, routes }}
          renderScene={SceneMap({
            first: FirstRoute,
            second: SecondRoute,
          })}
          onIndexChange={setTabIndex}
          initialLayout={{ width: global.windowWidth }}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  scene: {
    flex: 1,
  },
})
