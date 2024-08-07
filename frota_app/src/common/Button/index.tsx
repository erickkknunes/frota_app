import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styles from './styles';
import colors from '../../constants/colors';

interface ButtonProps {
    title: string;
    onPress: () => void;
    fullWidth?: boolean;
    variant?: 'primary' | 'secondary' | 'outline';
    style?: object;
}

const Button: React.FC<ButtonProps> = ({ title, onPress, fullWidth = false, variant = 'primary', style }) => {
    let buttonStyle = { ...styles.button };
    let textStyle = { ...styles.buttonText };

    switch (variant) {
        case 'primary': {
            buttonStyle = { ...buttonStyle, ...styles.primary };
            textStyle = { ...textStyle, color: colors.whiteIsh };
            break;
        }
        case 'secondary': {
            break;
        }
        case 'outline': {
            buttonStyle = { ...buttonStyle, ...styles.secondary };
            textStyle = { ...textStyle, color: colors.primary };
            break;
        }
    }

    return (
        <TouchableOpacity
            style={[
                buttonStyle,
                fullWidth && styles.fullWidth,
                style
            ]}
            onPress={onPress}
        >
            <Text style={textStyle}>{title}</Text>
        </TouchableOpacity>
    );
};

export default Button;