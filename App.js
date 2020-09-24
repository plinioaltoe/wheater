import { StatusBar } from 'expo-status-bar'
import React from 'react';
import { ImageBackground, KeyboardAvoidingView, Platform, StyleSheet, Text, ActivityIndicator, View } from 'react-native';

import getImageForWeather from "./utils/getImageForWeather";
import { fetchLocationId, fetchWeather } from "./utils/api"
import SearchInput from './components/SearchInput';

export default class App extends React.Component {

  state = {
    location: '',
    weather: '',
    temperature: '',
    error: false,
    loading: false
  }

  handleUpdateLocation = async (city) => {
    try {
      this.setState({ loading: true })
      const woeid = await fetchLocationId(city)
      const { location, weather, temperature } = await fetchWeather(woeid)
      this.setState({ location, weather, temperature: `${Math.ceil(temperature)}º`, loading: false, error: false })
    } catch (error) {
      this.setState({ loading: false, error: true })
    }
  }

  componentDidMount = () => {
    this.handleUpdateLocation("Lisbon")
  }

  render() {

    const { location, weather, temperature, loading, error } = this.state

    return (
      <KeyboardAvoidingView
        style={styles.container}
        behavior="height"
      >

        <StatusBar style="light" />

        <ImageBackground
          source={getImageForWeather(weather)}
          style={styles.imageContainer}
          imageStyle={styles.image}
        >

          <View style={styles.detailsContainer}>
            {loading ? <ActivityIndicator
              animating={loading}
              color="white"
              size="large" />
              :
              <>
                {error ? <Text style={[styles.largeText, styles.textStyleError]}>City not found</Text>
                  :
                  <>
                    <Text style={[styles.largeText, styles.textStyle]}>{location}</Text>
                    <Text style={[styles.smallText, styles.textStyle]}>{weather}</Text>
                    <Text style={[styles.largeText, styles.textStyle]}>{temperature}</Text>
                  </>
                }
                < SearchInput
                  onSubmit={this.handleUpdateLocation} />
              </>
            }
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
  textStyle: {
    textAlign: "center",
    fontFamily: Platform.OS === 'ios' ? "AvenirNext-Regular" : "Roboto",
    color: "white"
  },
  textStyleError: {
    color: "red"
  },
  largeText: {
    fontSize: 44,
  },
  smallText: {
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
  detailsContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: "center",
    backgroundColor: "rgba(0,0,0,0.2)",
    paddingHorizontal: 20,
  }

});
