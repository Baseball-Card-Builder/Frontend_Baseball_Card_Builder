import { View, Text, StyleSheet, ScrollView } from "react-native";
import { useState } from "react";
import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton";

const SignUpScreen = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordAgain, setPasswordAgain] = useState("");

  const onRegisterPressed = () => {
    console.log("Register Pressed!");
  };
  const onSignInPressed = () => {
    navigation.navigate("signIn")
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text>Create Account</Text>

        <CustomInput 
          placeholder="Email" 
          value={email} 
          setValue={setEmail} 
        />
        <CustomInput
          placeholder="Password"
          value={password}
          setValue={setPassword}
          secureTextEntry
        />
         <CustomInput
          placeholder="Confirm password"
          value={passwordAgain}
          setValue={setPasswordAgain}
          secureTextEntry
        />
        <CustomButton text="Register" onPress={onRegisterPressed} />
        <CustomButton text="Have an account? Sign in" onPress={onSignInPressed} />
      </View>
    </ScrollView>
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
