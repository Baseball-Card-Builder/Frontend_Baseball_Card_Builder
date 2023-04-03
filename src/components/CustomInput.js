import { View, Text, TextInput, StyleSheet, secureTextEntry } from "react-native";

const CustomInput = ({ value, setValue, placeholder }) => {
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

export default CustomInput;

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
});
