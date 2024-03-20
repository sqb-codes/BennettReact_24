import { TextInput, View, Text } from "react-native";
import { styles } from "./Input.styles";

export function Input({defaultValue, onChange, unit}) {
    return (
        <View style={styles.wrapper}>
            <TextInput 
                placeholder="Enter temperature here"
                style={styles.textInput}
                maxLength={3}
                defaultValue={defaultValue.toString()}
                onChangeText={(text) => {
                    onChange(text);
                }}
            />
            <Text style={styles.unit}>{unit}</Text>
        </View>
    )
}