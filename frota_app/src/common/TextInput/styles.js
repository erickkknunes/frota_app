import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

const styles = StyleSheet.create({
    container: {
        width: '100%',
        marginVertical: 12,
    },
    input: {
        height: 52,
        borderWidth: 2,
        borderColor: colors.primary,
        borderRadius: 8,
        fontSize: 18,
        color: colors.black,
        paddingLeft: 12
    },
});

export default styles;