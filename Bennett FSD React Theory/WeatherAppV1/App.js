import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { styles } from './App.styles';
import { Home } from './pages/Home';
import { useEffect, useState } from 'react';
import {getCurrentPositionAsync, requestForegroundPermissionsAsync} from "expo-location";

export default function App() {
  const [coordinates, setCoordinates] = useState();

  useEffect(() => {
    getUserCoordinates()
  }, []);

  async function getUserCoordinates() {
    const {status} = await requestForegroundPermissionsAsync();
    // console.log("Status:",status);
    if(status === "granted") {
      const location = await getCurrentPositionAsync({});
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

  return (
    <View style={styles.container}>
    
      <Home />
    
    </View>
  );
}

