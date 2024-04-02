import { View, Text } from "react-native";
import { styles } from "./Home.styles";

export function Home() {
    return (
        <>
            <View style={styles.wrapper}>
                <Text>Basic Weather Info</Text>
            </View>
            <View style={styles.search}>
                <Text>Searchbar</Text>
            </View>
            <View style={styles.advInfo}>
                <Text>Advanced Weather Info</Text>
            </View>
        </>
    )
}