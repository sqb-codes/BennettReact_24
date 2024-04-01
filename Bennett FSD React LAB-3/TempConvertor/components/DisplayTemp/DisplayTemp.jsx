import { Text } from "react-native";
import { styles } from "./DisplayTemp.style";

export function DisplayTemp({temperature, unit}) {
    return (
        <Text style={styles.tempText}>
            {temperature} °{unit}
        </Text>
    )
}