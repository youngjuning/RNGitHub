import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { RouteProp } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { RootStackParamList } from '../routes/AppContainer'

type FlexBoxScreenNavigationProp = StackNavigationProp<RootStackParamList, 'FlexBoxScreen'>
type FlexBoxScreenRouteProp = RouteProp<RootStackParamList, 'FlexBoxScreen'>
type Props = {
  navigation: FlexBoxScreenNavigationProp
  route: FlexBoxScreenRouteProp
}

const FlexBoxScreen: React.SFC<Props> = ({ navigation, route }) => {
  return (
    <View style={styles.container}>
      <View style={styles.parent}>
        <View style={[styles.child, { flex: 1 }]}>
          <Text>1</Text>
        </View>
        <View style={[styles.child, { alignSelf: 'flex-start', flex: 2 }]}>
          <Text>2</Text>
        </View>
        <View style={[styles.child, { alignSelf: 'center', flex: 3 }]}>
          <Text>3</Text>
        </View>
        <View style={[styles.child, { alignSelf: 'flex-end', flex: 4 }]}>
          <Text>4</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  child: {
    alignItems: 'center',
    backgroundColor: 'darkcyan',
    justifyContent: 'center',
    margin: 5,
    width: 50,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  parent: {
    alignItems: 'center',
    backgroundColor: 'darkgray',
    height: 400,
  },
})

export default FlexBoxScreen
