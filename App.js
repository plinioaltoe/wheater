import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ImageBackground, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, View } from 'react-native';

import getImageForWeather from "./utils/getImageForWeather";
import SearchInput from './components/SearchInput';

export default class App extends React.Component {

  render(){

    return (
      <KeyboardAvoidingView 
        style={styles.container}
        behavior="height"
      >
        <ImageBackground
          source={getImageForWeather('Clear')}
          style={styles.imageContainer}
          imageStyle={styles.image}
        >

        <View style={styles.detailsContainer}>
  
          <Text style={[styles.largeText, styles.textStyle]}>Lisboa</Text>
          <Text style={[styles.smallText, styles.textStyle]}>Limpinho...</Text>
          <Text style={[styles.largeText, styles.textStyle]}>23º</Text>
  
          <SearchInput 
            placeholder="Search City......"
          />
        </View>

        </ImageBackground>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textStyle:{
    textAlign:"center",
    fontFamily: Platform.OS === 'ios' ? "AvenirNext-Regular" : "Roboto",
  },
  largeText:{
    fontSize: 44,
  },
  smallText:{
    fontSize: 18,
  },
  imageContainer: {
    flex: 1,
  },
  image: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover',
  },
  detailsContainer:{
    flex:1,
    alignItems: 'center',
    justifyContent:"center",
    backgroundColor: "rgba(0,0,0,0.2)",
    paddingHorizontal: 20,
  }

});
