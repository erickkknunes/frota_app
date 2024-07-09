import React, { useState } from 'react';
import { View, TextInput, Button, Text, Alert } from 'react-native';
import api from '../api/api';
import { globalStyles } from '../styles/globalStyles';

const LoginScreen = ({ navigation }) => {
    const [usuario, setUsuario] = useState('');
    const [senha, setSenha] = useState('');
    const [error, setError] = useState('');

    const handleLogin = async () => {
        try {
            const response = await api.post('http://192.168.1.2:3000/usuarios/login', {
                nomeUsuario: usuario,
                senha
            });
            Alert.alert('Login bem-sucedido!');
            navigation.navigate('LancamentoViagem');
        } catch (error) {
            setError('Falha no login. Verifique suas credenciais.');
        }
    };

    const navigateToCadastro = () => {
        navigation.navigate('Cadastro');
    };

    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.title}>Faça Login</Text>
            {error ? <Text style={globalStyles.errorText}>{error}</Text> : null}
            <TextInput
                style={globalStyles.input}
                placeholder="Nome de usuário"
                placeholderTextColor="#888"
                value={usuario}
                onChangeText={setUsuario}
            />
            <TextInput
                style={globalStyles.input}
                placeholder="Senha"
                placeholderTextColor="#888"
                onChangeText={setSenha}
                secureTextEntry
            />
            <View style={globalStyles.buttonContainer}>
                <Button color="#ffffff" title="Login" onPress={handleLogin} />
            </View>
            <View style={globalStyles.buttonContainer}>
                <Button color="#ffffff" title="Criar uma conta" onPress={navigateToCadastro} />
            </View>
        </View>
    );
};

export default LoginScreen;
