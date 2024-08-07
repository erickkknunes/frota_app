import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

const styles = StyleSheet.create({
    modalTopIndicator: {
        width: 52,
        height: 8,
        backgroundColor: colors.text,
        borderRadius: 50
    },
    title: {
        color: colors.text,
        fontSize: 20,
        fontWeight: '700',
        marginTop: 40,
    },
    button: {
        width: '100%',
        borderRadius: 50,
        marginTop: 20,
    },
});

export default styles;