import { View, Text, Image, StyleSheet } from "react-native";
import { useState } from "react";
import Logo from "../../images/baseball.jpg";
import Input from "../../src/components/Input";
import ForgotPasswordButton from "../components/ForgotPasswordButton";

const SignInScreen = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.root}>
      <Image source={Logo} style={styles.logo} resizeMode="contain" />
      <Input placeholder="Email" />
      <Input placeholder="Password" />
      <ForgotPasswordButton />
      </View>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: "green",
        alignItems:"center",
        marginTop: "30%"
    },
  logo: {
    width: "70%",
    maxWidth: 250,
    height: 150,
    alignItems: "center",
    backgroundColor: "green",
    marginBottom: 20,
  },
});
