import { Text, TouchableOpacity } from "react-native";
import { styles } from "./ToggleButton.style";


export function ToggleButton({onPress, unit}) {
    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={styles.buttonTxt}>Convert to {unit}</Text>
        </TouchableOpacity>
        
    )
}