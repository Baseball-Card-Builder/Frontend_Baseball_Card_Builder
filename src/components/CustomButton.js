import { TouchableOpacity, StyleSheet, Text } from "react-native";

const CustomButton = ({ onPress, text, type }) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.container, styles[`button_${type}`]]} type={type}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  container: {
    width: "40%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10
  },
  button_PRIMARY: {
    backgroundColor: "#ff1437",
  },
  button_SECONDARY: {
    marginTop: 0.5,
  },
  button_TERTIARY: {
    marginTop: 0.1,
  },
  text: {
    fontWeight: "bold",
    color: "black"
  },
});
