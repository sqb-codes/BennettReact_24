import { TextInput, View } from "react-native";
import { styles } from "./Input.style";

export function Input({defaultValue, onChange}) {
    return (
        <View style={styles.textBoxWrapper}>
            <TextInput 
                maxLength={3}
                defaultValue={defaultValue.toString()}
                style={styles.textInput}
                placeholder="Enter Temperature"
                onChangeText={(text) => {
                    onChange(text);
                }}/>
        </View>
    )
}