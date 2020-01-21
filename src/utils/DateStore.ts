import store from 'react-native-simple-store'

export default class DataStore {
  fetchLocalData = (apiName: string) => {
    return store.get(apiName)
  }

  fetchNetData = () => {}
  saveData = (apiName: string, data: object) => {
    store.save(apiName, { data, timestamp: new Date() })
  }
}
