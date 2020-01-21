import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { RouteProp } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { RootStackParamList } from '../routes/StackParamList'

type PopularScreenNavigationProp = StackNavigationProp<RootStackParamList, 'PopularScreen'>
type PopularScreenRouteProp = RouteProp<RootStackParamList, 'PopularScreen'>
type Props = {
  navigation: PopularScreenNavigationProp
  route: PopularScreenRouteProp
}

export default class PopularScreen extends React.Component<Props> {
  constructor(props: Props) {
    super(props)
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={{ fontSize: 30 }}> PopularScreen </Text>
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
