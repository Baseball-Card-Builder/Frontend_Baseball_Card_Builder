import { View, Text, Image, StyleSheet } from "react-native";
import { useState } from "react";
import Logo from "../../images/baseball.jpg";
import Input from "../../src/components/Input";

const SignInScreen = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.root}>
      <Image source={Logo} style={styles.logo} resizeMode="contain" />
      <Input placeholder="Username" value={username} setValue={setUsername} />
      <Input placeholder="Password" value={password} setValue={setPassword} secureTextEntry={true}/>
    </View>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  root: {
    alignItems: "center",
    padding: 20,
  },
  logo: {
    width: "70%",
    maxWidth: 250,
    height: 150,
    backgroundColor: "green",
  },
});
