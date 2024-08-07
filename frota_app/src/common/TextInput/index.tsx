import React from "react";
import { Animated, TextInput as TI, TextInputProps as TIP, TextStyle, View, ViewStyle } from "react-native";

import styles from "./styles";
import colors from "../../constants/colors";

export interface TextInputProps extends TIP {
    label: string;
    onChangeText: (text: string) => void;
    mask?: (text: string) => string;
    style?: object;
}

const TextInput: React.FC<TextInputProps> = ({ label, onChangeText, mask, style, ...props }) => {
    const [isFocused, setIsFocused] = React.useState<boolean>(false);
    const [showLabel, setShowLabel] = React.useState<boolean>(true);
    const [animatedIsFocused] = React.useState(new Animated.Value(0));
    const [internalValue, setInternalValue] = React.useState<string | undefined>(props.value);

    React.useEffect(() => {
        setInternalValue(props.value);
    }, [props.value]);

    const handleChange = (text: string) => {
        setInternalValue(text);
        if (mask !== undefined) {
            let maskedText = mask(text);
            onChangeText(maskedText);
        } else
            onChangeText(text);
    };

    const handleFocus = () => {
        setIsFocused(true);
        if (internalValue !== undefined)
            setShowLabel(true);
        Animated.timing(animatedIsFocused, {
            toValue: 1,
            duration: 200,
            useNativeDriver: false,
        }).start();
    };

    const handleBlur = () => {
        setIsFocused(false);
        if (internalValue !== undefined && internalValue.length !== 0)
            setShowLabel(false);
        Animated.timing(animatedIsFocused, {
            toValue: 0,
            duration: 200,
            useNativeDriver: false,
        }).start();
    };

    const labelStyle = {
        width: 'fit-content',
        backgroundColor: colors.white,
        position: 'absolute',
        left: 12,
        zIndex: 20,
        paddingHorizontal: animatedIsFocused.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 6],
        }),
        top: animatedIsFocused.interpolate({
            inputRange: [0, 1],
            outputRange: [14, -8],
        }),
        fontWeight: animatedIsFocused.interpolate({
            inputRange: [0, 1],
            outputRange: ['400', '700'],
        }),
        fontSize: animatedIsFocused.interpolate({
            inputRange: [0, 1],
            outputRange: [16, 12],
        }),
        color: animatedIsFocused.interpolate({
            inputRange: [0, 1],
            outputRange: [colors.darkGrey, colors.primary],
        }),
    } as unknown as TextStyle;

    return (
        <View style={[styles.container as ViewStyle, style]}>
            {
                showLabel &&
                <Animated.Text style={labelStyle}>
                    {label}
                </Animated.Text>
            }
            <TI
                {...props}
                value={internalValue}
                style={styles.input}
                onFocus={handleFocus}
                onBlur={handleBlur}
                onChangeText={handleChange}
                blurOnSubmit
            />
        </View>
    );
};

export default TextInput;