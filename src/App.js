import {View, StyleSheet} from "react-native";
import Home from "./screens/home/Home";
import Login from "./screens/login/Login";

export default function () {
    const styles = StyleSheet.create({
        container: {
            backgroundColor: '#cccccc',
            height: '100%',
            justifyContent: "center",
            alignItems: "center",
            paddingHorizontal: 20
        }
    })
    return (
        <View style={styles.container}>
            {/*<Home />*/}
            <Login />
        </View>
    )
}
