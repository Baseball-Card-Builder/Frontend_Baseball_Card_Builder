import { View, Text, StyleSheet, ScrollView } from "react-native";
import { useState } from "react";
import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton";

const SignInScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signInPressed = () => {
    console.log("Signed in!");
  };
  const forgotPasswordPressed = () => {
    console.log("Forgot Password Pressed!");
  };
  const signUpPressed = () => {
    navigation.navigate("signUp")
  };

  return (
    <ScrollView>
      <View style={styles.root}>
        <Text>BASEBALL CARD BUILDER</Text>
        <CustomInput placeholder="Email" value={email} onChangeText={setEmail}/>
        <CustomInput placeholder="Password" value={password} onChangeText={setPassword}/>
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
