import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { RouteProp } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { RootStackParamList } from '../routes/StackParamList'

type FavoriteScreenNavigationProp = StackNavigationProp<RootStackParamList, 'FavoriteScreen'>
type FavoriteScreenRouteProp = RouteProp<RootStackParamList, 'FavoriteScreen'>
type Props = {
  navigation: FavoriteScreenNavigationProp
  route: FavoriteScreenRouteProp
}

export default class FavoriteScreen extends React.Component<Props> {
  constructor(props: Props) {
    super(props)
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={{ fontSize: 30 }}> FavoriteScreen </Text>
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
