import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

const styles = StyleSheet.create({
    button: {
        borderWidth: 2,
        borderColor: colors.primary,
        backgroundColor: colors.primary,
        borderRadius: 50,
        paddingVertical: 15,
        paddingHorizontal: 30,
        alignItems: 'center',
        marginVertical: 10,
    },
    fullWidth: {
        width: '100%',
    },
    primary: {
        backgroundColor: colors.primary,
    },
    secondary: {
        backgroundColor: 'transparent',
        borderColor: colors.primary,
        borderWidth: 2,
    },
    outline: {
        backgroundColor: 'transparent',
        borderColor: colors.primary,
        borderWidth: 2,
    },
    buttonText: {
        color: colors.whiteIsh,
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default styles;