import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from './styles';
import colors from '../../constants/colors';

interface IconButtonProps {
    title: string;
    onPress: () => void;
    iconName: string;
}

const IconButton: React.FC<IconButtonProps> = ({ title, onPress, iconName }) => {
    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <View style={styles.iconContainer}>
                <Icon name={iconName} size={26} color={colors.primary} />
            </View>
            <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
    );
};

export default IconButton;