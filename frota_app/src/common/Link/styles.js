import { StyleSheet } from "react-native";
import colors from "../../constants/colors";
import fonts from "../../constants/fonts";

const styles = StyleSheet.create({
    linkText: {
        fontSize: fonts.fontSizeMedium,
        color: colors.whiteIsh,
        textDecorationLine: 'underline',
        textAlign: 'center',
        marginVertical: 10,
    },
});

export default styles;