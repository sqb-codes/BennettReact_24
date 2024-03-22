import { TextInput, View } from "react-native";
import { styles } from "./InputTemp.style";

export function InputTemp({defaultValue, onChange}) {
    return(
        <View style={styles.inputWrapper}>
            <TextInput
                style={styles.textInput} 
                placeholder="Enter Temperature"
                maxLength={3}
                defaultValue={defaultValue.toString()}
                onChangeText={(text) => {
                    onChange(text);
                }}/>
        </View>
    );
}