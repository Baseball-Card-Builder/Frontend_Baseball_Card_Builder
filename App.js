import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignInScreen from "./src/screens/SignInScreen";
import SignUpScreen from "./src/screens/SignUpScreen";
import LoggedInMainScreen from "./src/screens/LoggedInMainScreen";
import BattersScreen from "./src/screens/BattersScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="dark" />
        <NavigationContainer>
        <Stack.Navigator initialRouteName="signIn">
          <Stack.Screen name="signIn" component={ SignInScreen }/>
          <Stack.Screen name="signUp" component={ SignUpScreen }/>
          <Stack.Screen name="loggedInMain" component={ LoggedInMainScreen }/> 
          <Stack.Screen name="battersScreen" component={ BattersScreen }/> 
        </Stack.Navigator>
        </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});
