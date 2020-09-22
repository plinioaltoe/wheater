import React, { Component } from 'react'
import { TextInput, StyleSheet, View } from 'react-native'

export default class SearchInput extends Component {
  render() {
    const { placeholder } = this.props
    return (
      <View style={styles.container}>
        <TextInput
          autoCorrect={false}
          placeholder={placeholder}
          placeholderTextColor="white"
          clearButtonMode="always"
          style={styles.textInput} />
      </View>
    )
  }
}

const styles = StyleSheet.create({

  container: {
    height: 40,
    width: 300,
    marginTop: 20,
    backgroundColor: '#666',
    marginHorizontal: 40,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  textInput: {
    flex: 1,
    color: 'white',
  },

})
