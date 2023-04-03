import { Alert, View, Text, StyleSheet } from "react-native";
import { useState } from "react";
import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton";
import axios from "axios";

const SignUpScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const isAllInputValid = validEmail && (password === confirmPassword);

  const handleEmailChange = (value) => {
    setEmail(value);
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    setValidEmail(emailRegex.test(value));
  };

  const storeAccount = () => {
    try {
      if (!isAllInputValid) {
        Alert.alert("Please enter a valid email and/or password");
        return;
      }
      axios.post("http://localhost:8080/user/signup", { email, password });
    } catch (error) {
      console.error(error);
    }
    navigation.navigate("signIn");
  };

  const onRegisterPressed = () => {
    storeAccount();
    }
  
  const onSignInPressed = () => {
    navigation.navigate("signIn");
  };

  return (
    <View style={styles.root}>
      <Text>Create Account</Text>

      <CustomInput
        placeholder="Email"
        value={email}
        setValue={handleEmailChange}
        autoCapitalize="none"
      />
      {!validEmail && <Text>Please enter a valid email address</Text>}
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
      <CustomButton
        text="Register"
        disabled={!storeAccount}
        onPress={onRegisterPressed}
      />
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
