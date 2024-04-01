import { ImageBackground, Text, View } from 'react-native';
import { styles } from './App.style';
import { Input } from './components/Input/Input';
import { DisplayTemp } from './components/DisplayTemp/DisplayTemp';
import city from "./assets/city.jpeg";
import { useState } from 'react';
import {convertTemp, toggleUnit} from "./utils/temperature";
import { ToggleButton } from './components/ToggleButton/ToggleButton';


export default function App() {

    const [inputValue, setInputValue] = useState(0);
    const [currentUnit, setCurrentUnit] = useState("F");
    const oppositeUnit = toggleUnit(currentUnit);

    function getConvertedTemp() {
      if(isNaN(inputValue)) {
        return "";
      }
      else {
        // toFixed - show 1 digit after decimal
        return convertTemp(inputValue, oppositeUnit).toFixed(1);
      }
      
    }

    return (
      <ImageBackground source={city} style={styles.background}>
        <View style={styles.container}>
          <View>
            <DisplayTemp unit={currentUnit} temperature={getConvertedTemp()}/>
          </View>

          <View style={styles.inputWrapper}>
            <Input defaultValue={0} onChange={setInputValue}/>
          </View>

          <View>
            {/* <Text>Toggle Temperature Unit</Text> */}
            <ToggleButton onPress={() => {
              setCurrentUnit(oppositeUnit);
            }}
            unit={oppositeUnit}/>
          </View>
        </View>
      </ImageBackground>      
    );
}

