import { View, Text, Image, StyleSheet } from "react-native";
import Logo from "../../images/Baseball_(crop).jpg";

const SignInScreen = () => {
  return (
    <View style={styles.root}>
      <Image source={Logo} style={styles.logo} resizeMode="contain" />
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
  },
});
