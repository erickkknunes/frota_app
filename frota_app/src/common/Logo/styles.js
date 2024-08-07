import { StyleSheet } from "react-native";
import colors from "../../constants/colors";
import fonts from "../../constants/fonts";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontFamily: fonts.default,
        fontStyle: 'italic',
        fontWeight: 'bold',
        color: colors.whiteIsh,
    },
});

export default styles;