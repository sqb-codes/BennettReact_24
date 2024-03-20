import { Text, TouchableOpacity } from "react-native";
import { styles } from "./ToggleButton.style";

export function ToggleButton({unit, onPress}) {
    return (
        <TouchableOpacity onPress={onPress} style={styles.btn}>
            <Text style={styles.btnText}>Convert to {unit}</Text>
        </TouchableOpacity>
    );
}