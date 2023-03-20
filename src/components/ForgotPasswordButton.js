import { TouchableOpacity, Text, StyleSheet } from "react-native";

const ForgotPasswordButton = () => {
    return (
        <TouchableOpacity>
            <Text style={styles.forgotBTN}>Forgot Password?</Text>
        </TouchableOpacity>
    )
};

export default ForgotPasswordButton;

const styles = StyleSheet.create({
    forgotBTN: {
        height: 30,
        marginBottom: 30,
    }
})