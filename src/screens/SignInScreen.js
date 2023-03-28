import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import { useState } from "react";
import Logo from "../../assets/images/baseball.jpg";
import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton";

const SignInScreen = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const loginPressed = () => {
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
        <Image source={Logo} style={styles.logo} resizeMode="contain" />
        <Text>BASEBALL CARD BUILDER</Text>
        <CustomInput placeholder="Email" />
        <CustomInput placeholder="Password" />
        <CustomButton 
          onPress={loginPressed} 
          text="Login" 
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
  logo: {
    width: "70%",
    maxWidth: 250,
    height: 150,
    alignItems: "center",
    marginBottom: 20,
  },
});
