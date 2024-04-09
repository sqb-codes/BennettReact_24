import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { styles } from './App.styles';
import { Home } from './pages/Home/Home';
import { useEffect, useState } from 'react';
import {getCurrentPositionAsync, requestForegroundPermissionsAsync} from "expo-location";
import { MeteoAPI } from './api/meteo';

export default function App() {
  const [coordinates, setCoordinates] = useState();
  const [weather, setWeather] = useState();

  useEffect(() => {
    getUserCoordinates()
  }, []);

  useEffect(() => {
    if(coordinates) {
      fetchWeatherByCoords(coordinates);
    }
  }, [coordinates]);



  async function fetchWeatherByCoords(coords) {
    const weatherResponse = await MeteoAPI.fetchWeather(coords);
    setWeather(weatherResponse);
  }

  async function getUserCoordinates() {
    const {status} = await requestForegroundPermissionsAsync();
    // console.log("Status:",status);
    if(status === "granted") {
      console.log("Fetching Location...");
      const location = await getCurrentPositionAsync();
      console.log("Location :",location);
      setCoordinates({
        lat: location.coords.latitude,
        lng: location.coords.longitude
      });
    }
    else {
      setCoordinates({
        lat: 26.8467,
        lon: 80.9462
      })
    }
  }

  console.log("Coordinates :",coordinates);
  console.log("Weather :",weather);

  return (
    <View style={styles.container}>
    
      <Home />
    
    </View>
  );
}

