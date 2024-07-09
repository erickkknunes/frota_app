import React, { useState } from 'react';
import { View, TextInput, Button, Text, Alert } from 'react-native';
import axios from 'axios';
import { globalStyles } from '../styles/globalStyles';

const CadastroScreen = ({ navigation }) => {
    const [nome, setNome] = useState('');
    const [usuario, setUsuario] = useState('');
    const [senha, setSenha] = useState('');
    const [email, setEmail] = useState('');
    const [comissao, setComissao] = useState('');
    const [placaCaminhao, setPlacaCaminhao] = useState('');

    const handleCadastro = async () => {
        try {
            const response = await axios.post('http://192.168.1.2:3000/usuarios/cadastro', {
                nomeCompleto: nome,
                nomeUsuario: usuario,
                senha,
                email,
                comissao,
                placaCaminhao,
            });
            Alert.alert('Cadastro realizado com sucesso!');
            navigation.navigate('Login');
        } catch (error) {
            console.error('Erro ao cadastrar usuário:', error);
            Alert.alert('Erro ao cadastrar usuário.');
        }
    };

    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.title}>Cadastro de Usuário</Text>
            <TextInput
                style={globalStyles.input}
                placeholder="Nome completo"
                placeholderTextColor="#888"
                value={nome}
                onChangeText={setNome}
            />
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
                secureTextEntry
                value={senha}
                onChangeText={setSenha}
            />
            <TextInput
                style={globalStyles.input}
                placeholder="E-mail"
                placeholderTextColor="#888"
                value={email}
                onChangeText={setEmail}
            />
            <TextInput
                style={globalStyles.input}
                placeholder="Comissão"
                placeholderTextColor="#888"
                value={comissao}
                onChangeText={setComissao}
            />
            <TextInput
                style={globalStyles.input}
                placeholder="Placa do caminhão"
                placeholderTextColor="#888"
                value={placaCaminhao}
                onChangeText={setPlacaCaminhao}
            />
            <View style={globalStyles.buttonContainer}>
                <Button color="#ffffff" title="Cadastrar" onPress={handleCadastro} />
            </View>
        </View>
    );
};

export default CadastroScreen;
