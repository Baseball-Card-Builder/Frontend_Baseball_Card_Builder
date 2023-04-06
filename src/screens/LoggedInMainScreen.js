import { StyleSheet } from "react-native";
import CustomButton from "../components/CustomButton";

const LoggedInMainScreen = ({ navigation }) => {
  const battersButtonHandler = () => {
    navigation.navigate("battersScreen");
  };
  const pitchersButtonHandler = () => {
    navigation.navigate("pitchersScreen");
  };

  return (
    <>
      <CustomButton onPress={battersButtonHandler} text="Batters" />
      <CustomButton onPress={pitchersButtonHandler} text="Pitchers" />
    </>
  );
};

export default LoggedInMainScreen;

const styles = StyleSheet.create({});
