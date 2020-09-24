import React, { useState } from 'react'
import { TextInput, StyleSheet, View } from 'react-native'
import PropTypes from "prop-types"

export default function SearchInput({ placeholder, onSubmit }) {

  const [text, setText] = useState('')

  const handleChange = (text) => {
    setText(text)
  }

  const handleSubmitEditing = () => {
    if (!text) return

    onSubmit(text)
    setText('')
  }

  return (
    <View style={styles.container}>
      <TextInput
        autoCorrect={false}
        placeholder={placeholder}
        placeholderTextColor="white"
        clearButtonMode="always"
        style={styles.textInput}
        value={text}
        onChangeText={handleChange}
        onSubmitEditing={handleSubmitEditing} />
    </View>
  )
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
