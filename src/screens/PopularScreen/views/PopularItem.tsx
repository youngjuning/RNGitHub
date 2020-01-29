import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity, Alert } from 'react-native'
import Icon from '../../../iconfont/Icon'

interface Props {
  item: any
  onSelect: () => void
}

export default class PopularItem extends React.Component<Props> {
  render() {
    const { item } = this.props
    return (
      <>
        <View style={{ height: 5 }} />
        <TouchableOpacity onPress={this.props.onSelect}>
          <View style={styles.container}>
            <Text style={styles.title}>{item.full_name}</Text>
            <Text style={styles.description} numberOfLines={1} ellipsizeMode="tail">
              {item.description}
            </Text>
            <View style={styles.row}>
              <Image style={{ height: 24, width: 24 }} source={{ uri: item.owner.avatar_url }} />
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Icon name="shoucang" />
                <Text>{item.stargazers_count}</Text>
              </View>
              {/* <TouchableOpacity onPress={() => {}}>
                <Icon name="aixin" color="red" />
              </TouchableOpacity> */}
            </View>
          </View>
        </TouchableOpacity>
        <View style={{ height: 5 }} />
      </>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    borderColor: '#dddddd',
    borderRadius: 2,
    borderWidth: 0.5,
    elevation: 2,
    marginHorizontal: 15,
    padding: 10,
    shadowColor: 'gray',
    shadowOffset: { width: 0.5, height: 0.5 },
    shadowOpacity: 0.4,
    textShadowRadius: 1,
  },
  description: {
    color: '#757575',
    fontSize: 14,
    height: 18,
    includeFontPadding: false,
    marginBottom: 2,
    textAlignVertical: 'center',
  },
  row: {
    alignItems: 'center',
    flexDirection: 'row',
    height: 24,
    justifyContent: 'space-between',
  },
  title: {
    color: '#212121',
    fontSize: 16,
    height: 20,
    marginBottom: 2,
  },
})
