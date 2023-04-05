import { View, TextInput, StyleSheet } from "react-native";

const PasswordInput = ({ value, setValue, placeholder }) => {
  return (
    <View style={styles.container}>
      <TextInput
        value={value}
        onChangeText={setValue}
        placeholder={placeholder}
        style={styles.textInput}
        secureTextEntry={true}
      />
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        borderRadius: 30,
        width: "70%",
        height: 45,
        marginTop: 20,
        alignItems: "center",
      },
      textInput: {
        height: 50,
        flex: 1,
        padding: 10,
        marginLeft: 20,
      }
})

export default PasswordInput;