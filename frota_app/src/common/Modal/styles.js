import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

const styles = StyleSheet.create({
    centeredView: {
        width: '100%',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        position: 'absolute',
        bottom: 0,
    },
    modalBackground: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
    },
    modalView: {
        width: '100%',
        backgroundColor: colors.white,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        paddingTop: 12,
        paddingHorizontal: 40,
        paddingBottom: 60,
        alignItems: 'center',
        shadowColor: colors.black,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
});

export default styles;