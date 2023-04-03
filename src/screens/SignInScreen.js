import { View, Text, StyleSheet, ScrollView, Alert, AsyncStorage } from "react-native";
import { useState } from "react";
import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton";
import axios from "axios";

const SignInScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signInPressed = async () => {
    try {
      const response = await axios.post("http://localhost:8080/user/login", {
        email,
        password
      });
      if (response.status === 200) {
        const authToken = response.data.token;
        await  AsyncStorage.setItem('authToken', authToken);
        navigation.navigate("LoggedInMain");
      } else {
        Alert.alert("Email or password does not exist.");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const forgotPasswordPressed = () => {
    console.log("Forgot Password Pressed!");
  };
  const signUpPressed = () => {
    navigation.navigate("signUp");
  };

  return (
    <ScrollView>
      <View style={styles.root}>
        <Text>BASEBALL CARD BUILDER</Text>
        <CustomInput
          placeholder="Email"
          value={email.toLocaleLowerCase()}
          setValue={setEmail}
        />
        <CustomInput
          placeholder="Password"
          value={password}
          setValue={setPassword}
          secureTextEntry={true}
        />
        <CustomButton 
          onPress={signInPressed} 
          text="Sign In" 
          type="PRIMARY" 
        />
        <CustomButton
          onPress={forgotPasswordPressed}
          text="Forgot Password?"
          type="SECONDARY"
        />
        <CustomButton 
          onPress={signUpPressed} 
          text="Sign up" 
          type="TERTIARY" 
        />
      </View>
    </ScrollView>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: "center",
    marginTop: "20%",
  },
});
