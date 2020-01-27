import React from 'react'
import { View, StyleSheet, StatusBar } from 'react-native'
import { RouteProp } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { TabView, SceneMap, TabBar } from 'react-native-tab-view'
import { observable, action, computed, runInAction, toJS } from 'mobx'
import { observer } from 'mobx-react'
import { LargeList } from 'react-native-largelist-v3'
import { ChineseWithLastDateHeader, ChineseWithLastDateFooter } from 'react-native-spring-scrollview/Customize'
import { RootStackParamList } from '../../routes/StackParamList'
import GitHub from '../../request/GitHub'
import PopularItem from './views/PopularItem'

type PopularScreenNavigationProp = StackNavigationProp<RootStackParamList, 'PopularScreen'>
type PopularScreenRouteProp = RouteProp<RootStackParamList, 'PopularScreen'>
type Props = {
  navigation: PopularScreenNavigationProp
  route: PopularScreenRouteProp
}

const routes = [
  { key: 'java', title: 'java' },
  { key: 'javascript', title: 'javascript' },
]

class ListStore {
  listRef?: LargeList | null

  @observable tabIndex = 0
  @observable data: { items: any[]; total_count?: number; incomplete_results?: boolean } = { items: [] }
  @computed get listData() {
    return [{ items: this.data.items }]
  }

  @action onIndexChange = tabIndex => {
    this.tabIndex = tabIndex
    this.data = { items: [] }
    this.loadData()
  }

  loadData = async () => {
    try {
      const data = await GitHub.getRepositories({ q: routes[this.tabIndex].key })
      runInAction(() => {
        this.data = data
        console.log('[PopularScreen]', toJS(this.data.items[0]))
      })
    } catch (error) {
      console.log('[PopularScreen]', error)
    }
  }

  onRefresh = () => {
    this.listRef?.endRefresh()
  }

  loadMore = () => {
    this.listRef?.endLoading()
  }
}

@observer
export default class PopularScreen extends React.Component<Props> {
  listStore: ListStore
  constructor(props: Props) {
    super(props)
    this.listStore = new ListStore()
  }

  async componentDidMount() {
    this.listStore.loadData()
  }

  renderListView = () => {
    const { listData, onRefresh, loadMore } = this.listStore
    return (
      <LargeList
        ref={ref => (this.listStore.listRef = ref)}
        data={listData}
        renderIndexPath={({ section, row }) => <PopularItem item={listData[section].items[row]} onSelect={() => {}} />}
        heightForIndexPath={() => 97}
        // 下拉刷新
        refreshHeader={ChineseWithLastDateHeader}
        onRefresh={onRefresh}
        // 上拉加载更多
        loadingFooter={ChineseWithLastDateFooter}
        onLoading={loadMore}
      />
    )
  }

  render() {
    const { tabIndex, onIndexChange } = this.listStore
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#2196f3" barStyle="dark-content" />
        <TabView
          navigationState={{ index: tabIndex, routes }}
          renderTabBar={props => (
            <TabBar {...props} indicatorStyle={{ backgroundColor: 'white' }} style={{ backgroundColor: '#2196f3' }} />
          )}
          renderScene={SceneMap({
            java: () => this.renderListView(),
            javascript: () => this.renderListView(),
          })}
          onIndexChange={onIndexChange}
          initialLayout={{ width: global.windowWidth }}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: global.statusBarHeight,
  },
})
