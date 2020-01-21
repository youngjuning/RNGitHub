import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { RouteProp } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { RootStackParamList } from '../routes/StackParamList'

type TrendingScreenNavigationProp = StackNavigationProp<RootStackParamList, 'TrendingScreen'>
type TrendingScreenRouteProp = RouteProp<RootStackParamList, 'TrendingScreen'>
type Props = {
  navigation: TrendingScreenNavigationProp
  route: TrendingScreenRouteProp
}

export default class TrendingScreen extends React.Component<Props> {
  constructor(props: Props) {
    super(props)
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={{ fontSize: 30 }}> TrendingScreen </Text>
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
