import React from 'react';
import { View, StyleSheet, ImageBackground, SafeAreaView } from 'react-native';

import Button from '../common/Button';
import IconButton from '../common/IconButton';
import Link from '../common/Link';
import Logo from '../common/Logo';
import ModalLogin from '../components/ModalLogin';
import ModalRegister from '../components/ModalRegister';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

interface ModalTypes {
    login: boolean;
    register: boolean;
}

const HomeScreen: React.FC = () => {
    const [modals, setModals] = React.useState<ModalTypes>({
        login: false,
        register: false,
    });

    const setModal = (name: string, value: boolean) => {
        setModals({ ...modals, [name]: value });
    };

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ImageBackground
                source={require('../../assets/images/nigel_tadyanehondo_bg.jpg')}
                style={styles.backgroundImage}
            >
                <View style={styles.overlay}>
                    <View style={styles.container}>
                        <Logo size='large' style={styles.logoBox} />

                        <View style={styles.buttonBox}>
                            <Button title='Acessar' onPress={() => setModal('login', true)} fullWidth />
                            <Button
                                title='Cadastre-se'
                                onPress={() => setModal('register', true)}
                                fullWidth
                                variant='outline'
                            />
                            <IconButton title='Sou Colaborador' onPress={() => { }} iconName='qrcode-scan' />
                            <Link title='Esqueci minha senha' onPress={() => { }} />
                        </View>
                    </View>
                </View>

                <ModalLogin
                    visible={modals.login}
                    onClose={() => setModal('login', false)}
                />

                <ModalRegister
                    visible={modals.register}
                    onClose={() => setModal('register', false)}
                />
            </ImageBackground>
        </SafeAreaView >
    );
};

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(30, 50, 80, 0.98)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logoBox: {
        position: 'absolute',
        top: 148,
    },
    buttonBox: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        bottom: 60,
        paddingHorizontal: 52,
    },
});

export default HomeScreen;