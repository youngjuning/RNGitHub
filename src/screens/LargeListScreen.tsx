import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { RouteProp } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { RootStackParamList } from '../routes/AppContainer'

type LargeListScreenNavigationProp = StackNavigationProp<RootStackParamList, 'LargeListScreen'>
type LargeListScreenRouteProp = RouteProp<RootStackParamList, 'LargeListScreen'>
type Props = {
  navigation: LargeListScreenNavigationProp
  route: LargeListScreenRouteProp
}

export default class LargeListScreen extends React.Component<Props> {
  constructor(props: Props) {
    super(props)
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={{ fontSize: 30 }}> LargeListScreen </Text>
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
