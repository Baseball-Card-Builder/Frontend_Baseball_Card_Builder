import { Alert, View, Text, StyleSheet } from "react-native";
import { useState } from "react";
import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton";
import axios from "axios";

const SignUpScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const postSignUp = () => {
    try {
      if (!setPassword === setConfirmPassword) {
        return Alert.alert("Passwords do not match")
      }
      axios.post("http://localhost:8080/user/signup", { email, password });
    } catch (error) {
      console.error(error);
    }
  };

  const onRegisterPressed = () => {
    postSignUp();
    if (postSignUp) {
      navigation.navigate("signIn");
    }
  };
  const onSignInPressed = () => {
    navigation.navigate("signIn");
  };

  return (
    <View style={styles.root}>
      <Text>Create Account</Text>

      <CustomInput placeholder="Email" value={email} setValue={setEmail} />
      <CustomInput
        placeholder="Password"
        value={password}
        setValue={setPassword}
        secureTextEntry
      />
      <CustomInput
        placeholder="Confirm password"
        value={confirmPassword}
        setValue={setConfirmPassword}
        secureTextEntry
      />
      <CustomButton text="Register" onPress={onRegisterPressed} />
      <CustomButton text="Have an account? Sign in" onPress={onSignInPressed} />
    </View>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: "center",
    marginTop: "20%",
  },
});
