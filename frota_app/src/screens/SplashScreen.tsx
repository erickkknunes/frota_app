import React, { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../App';

import colors from '../constants/colors';
import fonts from '../constants/fonts';
import Logo from '../common/Logo';

type SplashScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Splash'>;

type Props = {
    navigation: SplashScreenNavigationProp;
};

const SplashScreen: React.FC<Props> = ({ navigation }) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.replace('Home');
        }, 3000);
    }, [navigation]);

    return (
        <View style={styles.container}>
            <Logo />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.primary,
    },
});

export default SplashScreen;