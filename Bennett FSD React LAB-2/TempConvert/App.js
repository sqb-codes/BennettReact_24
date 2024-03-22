import { ImageBackground, Text, View } from 'react-native';
import { styles } from './App.style';
import { InputTemp } from './components/InputTemp/InputTemp';
import { DisplayTemp } from './components/DisplayTemp/DisplayTemp';
import bgImg from './assets/bgImg.jpg';
import convert from "./utils/tempConvert";
import { useState } from 'react';

export default function App() {
  const [inputValue, setInputValue] = useState(0);

  function getConvertedTemp() {
    if(isNaN(inputValue)) {
      return "";
    }
    else {
      return convert(inputValue, "C").toFixed(1);
    }
    
  }

  return (

    <ImageBackground source={bgImg} style={styles.bgImage}>
      <View style={styles.container}>
        {/* <View>
          <Text style={styles.temp}>0 °C</Text>
        </View> */}

        <DisplayTemp 
          temperature={getConvertedTemp()}/>

        {/* <View>
          <Text>Enter Temperature</Text>
        </View> */}

        <InputTemp 
          defaultValue={0}
          onChange={setInputValue}/>

        <View>
          <Text>Convert/Toggle Unit</Text>
        </View>
        
      </View>
    </ImageBackground>
    
  );
}

