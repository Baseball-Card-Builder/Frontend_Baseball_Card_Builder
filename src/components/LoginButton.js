import { TouchableOpacity, StyleSheet, Text } from "react-native";

const LoginButton = () => {
return (
  <TouchableOpacity style={styles.loginBtn}>
    <Text>LOGIN</Text>
  </TouchableOpacity>
)};

export default LoginButton;

const styles = StyleSheet.create({
  loginBtn: {
    width: "40%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    backgroundColor: "#ff1437",
  },
});
