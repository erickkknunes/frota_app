import React from 'react';
import { Text, View } from 'react-native';

import Modal, { ModalProps } from '../../common/Modal';
import TextInput from '../../common/TextInput';
import Button from '../../common/Button';
import styles from './styles';

interface ModalLoginFields {
    username: string;
    password: string;
}

const ModalLogin: React.FC<ModalProps> = ({ visible, onClose }) => {
    const [fields, setFields] = React.useState<ModalLoginFields>({
        username: '',
        password: '',
    });

    const setField = (name: string, value: string) => {
        setFields((prevFields) => ({
            ...prevFields,
            [name]: value,
        }));
    };

    const handleLogin = () => {
        console.log('Login attempted with: ', fields.username, fields.password);
        onClose();
    };

    const documentMask = (value: string): string => {
        value = value.replace(/[^\d]/g, '');
        console.log(value);
        if (value.length <= 11)
            return value
                .replace(/\D/g, '')
                .replace(/(\d{3})(\d)/, '$1.$2')
                .replace(/(\d{3})(\d)/, '$1.$2')
                .replace(/(\d{3})(\d{1,2})$/, '$1-$2');
        else if (value.length > 11 && value.length < 14)
            return value;
        else if (value.length > 14)
            return value
                .replace(/\D/g, '')
                .replace(/(\d{2})(\d)/, '$1.$2')
                .replace(/(\d{3})(\d)/, '$1.$2')
                .replace(/(\d{3})(\d{4})(\d)/, '$1/$2')
                .replace(/(\d{4})(\d{2})$/, '$1-$2');
        else
            return value;
    };

    return (
        <Modal visible={visible} onClose={onClose}>
            <View style={styles.modalTopIndicator}></View>
            <Text style={styles.title}>Faça seu acesso</Text>

            <TextInput
                label='Documento'
                value={fields.username}
                maxLength={18}
                mask={documentMask}
                onChangeText={(text) => setField('username', text)}
                keyboardType='numeric'
                autoCapitalize='none'
                autoFocus
                style={{ marginTop: 40 }}
            />
            <TextInput
                label='Senha'
                value={fields.password}
                onChangeText={(text) => setField('password', text)}
                secureTextEntry
            />

            <Button
                style={styles.button}
                title='Entrar'
                onPress={handleLogin}
                fullWidth
            />
        </Modal>
    );
};

export default ModalLogin;