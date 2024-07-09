import React, { useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';
import api from '../api/api';
import { globalStyles } from '../styles/globalStyles';

const LancamentoViagemScreen = ({ navigation }) => {
    const [nomeViagem, setNomeViagem] = useState('');
    const [origem, setOrigem] = useState('');
    const [destino, setDestino] = useState('');
    const [valorFrete, setValorFrete] = useState('');

    const handleLancamentoViagem = async () => {
        try {
            const response = await api.post('http://192.168.1.2:3000/viagens', {
                nomeViagem,
                origem,
                destino,
                valorFrete
            });
            Alert.alert('Viagem cadastrada com sucesso!');
            navigation.navigate('ListaViagens');
        } catch (error) {
            Alert.alert('Erro ao cadastrar viagem.');
        }
    };

    return (
        <View style={globalStyles.container}>
            <TextInput
                style={globalStyles.input}
                placeholder="Nome da Viagem"
                placeholderTextColor="#888"
                value={nomeViagem}
                onChangeText={setNomeViagem}
            />
            <TextInput
                style={globalStyles.input}
                placeholder="Origem"
                placeholderTextColor="#888"
                value={origem}
                onChangeText={setOrigem}
            />
            <TextInput
                style={globalStyles.input}
                placeholder="Destino"
                placeholderTextColor="#888"
                value={destino}
                onChangeText={setDestino}
            />
            <TextInput
                style={globalStyles.input}
                placeholder="Valor do Frete"
                placeholderTextColor="#888"
                value={valorFrete}
                onChangeText={setValorFrete}
                keyboardType="numeric"
            />
            <View style={globalStyles.buttonContainer}>
                <Button color="#ffffff" title="Cadastrar Viagem" onPress={handleLancamentoViagem} />
            </View>
            <View style={globalStyles.buttonContainer}>
                <Button color="#ffffff" title="Ver Viagens Cadastradas" onPress={() => navigation.navigate('ListaViagens')} />
            </View>
        </View>
    );
};

export default LancamentoViagemScreen;
