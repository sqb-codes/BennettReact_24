import { TextInput, View, Text } from "react-native";
import { styles } from "./ShowTemp.styles";

export function ShowTemp({temp, unit}) {
    return (
        <Text style={styles.tempText}>
            {temp} {unit}
        </Text>
    )
}