import React, { Component } from 'react'
import { TextInput, StyleSheet, View } from 'react-native'
import PropTypes from "prop-types"

export default class SearchInput extends Component {

  constructor(props) {
    super(props)
    this.state = {
      text: ''
    }
  }

  handleChange = (text) => {
    this.setState({ text })
  }

  handleSubmitEditing = () => {
    const { onSubmit } = this.props
    const { text } = this.state

    if (!text) return

    onSubmit(text)
    this.setState({ text: '' })
  }

  render() {
    const { text } = this.state
    const { placeholder, onSubmit } = this.props
    return (
      <View style={styles.container}>
        <TextInput
          autoCorrect={false}
          placeholder={placeholder}
          placeholderTextColor="white"
          clearButtonMode="always"
          style={styles.textInput}
          value={text}
          onChangeText={this.handleChange}
          onSubmitEditing={this.handleSubmitEditing} />
      </View>
    )
  }
}

SearchInput.propTypes = {
  placeholder: PropTypes.string,
  onSubmit: PropTypes.func.isRequired
}

SearchInput.defaultProps = {
  placeholder: "Please, type the city..."
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
