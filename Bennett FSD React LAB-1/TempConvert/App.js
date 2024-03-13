import { StatusBar } from 'expo-status-bar';
import { ImageBackground, Text, TextInput, View } from 'react-native';
import { Input } from './components/Input/Input';
import { styles } from './App.styles';
import bgimg from './assets/bgimg.jpg';
import { ShowTemp } from './components/ShowTemp/ShowTemp';
import { useState } from 'react';

export default function App() {
  
  const [inputValue, setInputValue] = useState(0);
  const [currentUnit, setCurrentUnit] = useState("C");
  
  return (
    <ImageBackground source={bgimg} style={styles.backgroundImage}>
      <View style={styles.container}>
        {/* <Text>Temperature</Text> */}
        {/* <TextInput 
          placeholder='Enter temperature' 
          style={styles.textInput}/> */}

          <ShowTemp unit={currentUnit} temp={inputValue}/>
          <Input 
            defaultValue={0} 
            onChange={setInputValue} 
            unit={currentUnit}/>

        <Text>Button</Text>
      </View>
    </ImageBackground>
    
  );
}

