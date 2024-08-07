import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

const styles = StyleSheet.create({
    button: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: colors.primary,
        borderRadius: 50,
        paddingVertical: 15,
        paddingHorizontal: 30,
        marginVertical: 10,
    },
    iconContainer: {
        marginRight: 10,
    },
    buttonText: {
        color: colors.primary,
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default styles;