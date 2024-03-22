import { ImageBackground, Text, View } from 'react-native';
import { styles } from './DisplayTemp.style';

export function DisplayTemp({temperature}) {
    return(
        <View style={styles.tempWrapper}>
          <Text style={styles.tempOutput}>{temperature} °F</Text>
        </View>
    )
}