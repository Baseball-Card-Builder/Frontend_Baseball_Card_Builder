import { View, Text, TextInput, StyleSheet } from "react-native";
import CustomButton from "../components/CustomButton";

const LoggedInMainScreen = ({ navigation }) => {
    const allCardsButtonHandler = () => {
        navigation.navigate("AllCardsScreen");
    }

    return (
        <CustomButton 
        onPress={allCardsButtonHandler} 
        text="All Cards" 
      />
    )
}

export default LoggedInMainScreen;

const styles = StyleSheet.create({})