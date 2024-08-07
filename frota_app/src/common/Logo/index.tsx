import React from 'react';
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import colors from '../../constants/colors';
import styles from './styles';

interface LogoProps {
    size?: 'regular' | 'large';
    style?: object;
}

const Logo: React.FC<LogoProps> = ({ size = 'regular', style }) => {
    let iconSize, textSize;
    const logoIconName = 'truck-fast';

    switch (size) {
        case 'regular':
            iconSize = 60;
            textSize = 30;
            break;
        case 'large':
            iconSize = 76;
            textSize = 38;
            break;
    }

    return (
        <View style={[styles.container, style]}>
            <Icon name={logoIconName} size={iconSize} color={colors.whiteIsh} />
            <Text style={[styles.text, { fontSize: textSize }]}>Frota App</Text>
        </View>
    );
};

export default Logo;