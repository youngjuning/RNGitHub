import store from 'react-native-simple-store'
import dayjs from 'dayjs'
import GitHub from './GitHub'

type Api = 'getTopics' | 'a'

class DataStore {
  static checkTimeStampValid = timestamp => {
    if (dayjs().diff(timestamp, 'hour') > 4) {
      return false
    }
    return true
  }

  fetchNetData = async (api: Api, params: any = {}) => {
    try {
      const resData = await GitHub[api](params)
      store.save(api, { data: resData, timestamp: new Date() })
      return resData
    } catch (error) {
      throw error
    }
  }

  fetchData = async (api: Api, params?: {}) => {
    try {
      let resData = await store.get(api)
      if (resData && DataStore.checkTimeStampValid(resData.timestamp)) {
        return resData.data
      }
      resData = await this.fetchNetData(api, { params })
      return resData
    } catch (error) {
      const resData = await this.fetchNetData(api, { params })
      return resData
    }
  }
}

export default new DataStore().fetchData
