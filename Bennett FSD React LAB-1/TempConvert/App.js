import { StatusBar } from 'expo-status-bar';
import { ImageBackground, Text, TextInput, View } from 'react-native';
import { Input } from './components/Input/Input';
import { styles } from './App.styles';
import bgimg from './assets/bgimg.jpg';
import { ShowTemp } from './components/ShowTemp/ShowTemp';
import { useState } from 'react';
import { convertTemp, toggleUnit } from './utils/temperature';
import { ToggleButton } from './components/ToggleButton/ToggleButton';

export default function App() {
  
  const [inputValue, setInputValue] = useState(0);
  const [currentUnit, setCurrentUnit] = useState("C");
  const unit = toggleUnit(currentUnit);

  function getConvertedTemp() {
    if(isNaN(inputValue)) {
      return "";
    }
    else {
      return convertTemp(inputValue, currentUnit).toFixed(1);
    }
  }
  
  return (
    <ImageBackground source={bgimg} style={styles.backgroundImage}>
      <View style={styles.container}>
        {/* <Text>Temperature</Text> */}
        {/* <TextInput 
          placeholder='Enter temperature' 
          style={styles.textInput}/> */}

          <ShowTemp unit={unit} temp={getConvertedTemp()}/>
          <Input 
            defaultValue={0} 
            onChange={setInputValue} 
            unit={toggleUnit()}/>

        <ToggleButton onPress={() => {
          setCurrentUnit(unit);
        }}
        unit={currentUnit}/>

      </View>
    </ImageBackground>
    
  );
}

