import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet } from "react-native";
import SignInScreen from "./src/screens/SignInScreen";

export default function App() {
  return (
    <SafeAreaView>
      <SignInScreen />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#059be0",
    alignItems: "center",
    justifyContent: "center",
  },
});
