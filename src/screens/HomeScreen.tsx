import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { RouteProp } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { RootStackParamList } from '../routes/StackParamList'
import CNode from '../request/CNode'

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'HomeScreen'>
type HomeScreenRouteProp = RouteProp<RootStackParamList, 'HomeScreen'>
type Props = {
  navigation: HomeScreenNavigationProp
  route: HomeScreenRouteProp
}

export default class HomeScreen extends React.Component<Props> {
  constructor(props: Props) {
    super(props)
    CNode.getTopics({ page: 1, tab: 'ask' }).then(res => {
      console.log('[HomeScreen]', res)
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={{ fontSize: 30 }}> HomeScreen </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
})