import {View, StyleSheet, TextInput} from "react-native";

export default function () {
    const styles = StyleSheet.create({
        container: {
            backgroundColor: '#FFF',
            width: '100%',
            paddingHorizontal: 12,
            paddingVertical: 20,
            height: 180,
            justifyContent: "space-around",
            borderRadius: 8
        },
        textInput: {
            width: '100%',
            height: 32,
            borderRadius: 8,
            borderStyle: "solid",
            borderColor: '#c1c1c1',
            paddingHorizontal: 20,
            borderWidth: 1,
            color: '#333'
        }
    })
    return (
        <View style={styles.container}>
            <TextInput style={styles.textInput} placeholder={'usuário'} />
            <TextInput style={styles.textInput} secureTextEntry={true} placeholder={'senha'} />
        </View>
    )
}
