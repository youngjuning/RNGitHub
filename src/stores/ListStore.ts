import { observable, action, computed, runInAction } from 'mobx'
import { LargeList } from 'react-native-largelist-v3'

export default class ListStore {
  listRef?: LargeList | null
  allLoaded = false
  @observable data: string[] = []
  @computed get listData() {
    return [{ items: [...this.data] }]
  }

  loadData = (): Promise<string[]> => {
    return new Promise((resolve, reject) => {
      try {
        setTimeout(() => {
          resolve(['上海', '苏州', '北京', '广州', '深圳'])
        }, 1000)
      } catch (error) {
        reject(error)
      }
    })
  }

  @action onRefresh = async () => {
    this.allLoaded = false
    const res = await this.loadData()
    runInAction(() => {
      this.data = res
    })
    this.listRef?.endRefresh()
  }

  @action loadMore = async () => {
    this.data = this.data.concat(['郑州'])
    if (this.data.length >= 8) {
      this.allLoaded = true
    }
    this.listRef?.endLoading()
  }
}
