import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignInScreen from "./src/screens/SignInScreen";
import SignUpScreen from "./src/screens/SignUpScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="light" />
        <NavigationContainer>
        <Stack.Navigator initialRouteName="signIn">
          <Stack.Screen name="signIn" component={SignInScreen }/>
          <Stack.Screen name="signUp" component={SignUpScreen }/>
        </Stack.Navigator>
        </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "green",
  },
});
