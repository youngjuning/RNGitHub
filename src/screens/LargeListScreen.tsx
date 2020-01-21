import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { RouteProp } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { observer } from 'mobx-react'
import { LargeList } from 'react-native-largelist-v3'
import { ChineseNormalHeader, ChineseWithLastDateFooter } from 'react-native-spring-scrollview/Customize'
import ListStore from '../stores/ListStore'
import { RootStackParamList } from '../routes/StackParamList'

type LargeListScreenNavigationProp = StackNavigationProp<RootStackParamList, 'LargeListScreen'>
type LargeListScreenRouteProp = RouteProp<RootStackParamList, 'LargeListScreen'>
type Props = {
  navigation: LargeListScreenNavigationProp
  route: LargeListScreenRouteProp
}

@observer
export default class LargeListScreen extends React.Component<Props> {
  listStore: ListStore
  constructor(props) {
    super(props)
    this.listStore = new ListStore()
  }

  renderItem = ({ section, row }) => {
    const { listData } = this.listStore
    const msg = listData[section].items[row]
    return (
      <View
        style={{
          paddingBottom: 10,
        }}
      >
        <View
          style={{
            backgroundColor: 'orange',
            justifyContent: 'center',
            alignItems: 'center',
            flex: 1,
          }}
        >
          <Text style={styles.ItemText}>{msg}</Text>
        </View>
      </View>
    )
  }

  renderEmpty = () => (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 18 }}>试试下拉刷新</Text>
    </View>
  )

  render() {
    const { listData, onRefresh, loadMore, allLoaded } = this.listStore
    return (
      <LargeList
        ref={ref => (this.listStore.listRef = ref)}
        data={listData}
        renderIndexPath={this.renderItem}
        heightForIndexPath={() => 200}
        // 下拉刷新
        refreshHeader={ChineseNormalHeader}
        onRefresh={onRefresh}
        // 上拉加载更多
        loadingFooter={ChineseWithLastDateFooter}
        onLoading={loadMore}
        allLoaded={allLoaded}
        renderEmpty={this.renderEmpty}
      />
    )
  }
}

const styles = StyleSheet.create({
  ItemText: {
    color: '#ffffff',
    fontSize: 20,
  },
})
