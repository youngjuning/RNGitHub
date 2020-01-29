import React from 'react'
import { View, StyleSheet, StatusBar } from 'react-native'
import { RouteProp } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import ScrollableTabView, { ScrollableTabBar } from 'react-native-scrollable-tab-view'
import { observable, action, computed, runInAction } from 'mobx'
import { observer } from 'mobx-react'
import { LargeList } from 'react-native-largelist-v3'
import { ChineseWithLastDateHeader, ChineseWithLastDateFooter } from 'react-native-spring-scrollview/Customize'
import { createAsyncIterator } from '@sishuguojixuefu/iterator'
import { RootStackParamList } from '../../routes/StackParamList'
import GitHub from '../../request/GitHub'
import PopularItem from './views/PopularItem'
import ScrollableTabViewItem from '../../views/ScrollableTabViewItem'

type PopularScreenNavigationProp = StackNavigationProp<RootStackParamList, 'PopularScreen'>
type PopularScreenRouteProp = RouteProp<RootStackParamList, 'PopularScreen'>
type Props = {
  navigation: PopularScreenNavigationProp
  route: PopularScreenRouteProp
}

const tabs = ['javascript', 'react', 'react native', 'vuejs']

class ListStore {
  listRef?: LargeList | null
  Iterator?: { next(): Promise<{ done: boolean; value: any[]; total: number }> }
  allLoaded = false

  @observable tabIndex = 0
  @observable data: any[] = []
  @computed get listData() {
    return [{ items: this.data }]
  }

  @action onChangeTab = ({ i }) => {
    this.tabIndex = i
    this.data = []
    this.initData()
  }

  initData = async () => {
    try {
      this.Iterator = createAsyncIterator(GitHub.getRepositories, { q: tabs[this.tabIndex], sort: 'stars' })
      const data = await this.Iterator.next()
      runInAction(() => {
        this.data = data.value
      })
    } catch (error) {
      console.log('[PopularScreen]', error)
    }
  }

  onRefresh = async () => {
    await this.initData()
    this.listRef?.endRefresh()
  }

  loadMore = async () => {
    const data = await this.Iterator!.next()
    runInAction(() => {
      this.data = this.data.concat(data.value)
      this.allLoaded = data.done
      this.listRef?.endLoading()
    })
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
    this.listStore.initData()
  }

  render() {
    const { onChangeTab, listData, onRefresh, loadMore, allLoaded } = this.listStore
    return (
      <View style={styles.container}>
        <StatusBar barStyle="dark-content" />
        <ScrollableTabView
          onChangeTab={onChangeTab}
          renderTabBar={() => <ScrollableTabBar />}
          tabBarActiveTextColor="#2196f3"
          tabBarUnderlineStyle={{ backgroundColor: '#2196f3', height: 2 }}
        >
          {tabs.map((item, index) => {
            return (
              <ScrollableTabViewItem tabLabel={item} key={index.toString()}>
                <LargeList
                  ref={ref => (this.listStore.listRef = ref)}
                  data={listData}
                  renderIndexPath={({ section, row }) => (
                    <PopularItem item={listData[section].items[row]} onSelect={() => {}} />
                  )}
                  heightForIndexPath={() => 97}
                  // 下拉刷新
                  refreshHeader={ChineseWithLastDateHeader}
                  onRefresh={onRefresh}
                  // 上拉加载更多
                  loadingFooter={ChineseWithLastDateFooter}
                  onLoading={loadMore}
                  allLoaded={allLoaded}
                />
              </ScrollableTabViewItem>
            )
          })}
        </ScrollableTabView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: global.ios ? global.statusBarHeight : 0,
  },
})
