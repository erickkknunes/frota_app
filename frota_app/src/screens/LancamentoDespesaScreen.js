import React, { useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';
import api from '../api/api';
import { globalStyles } from '../styles/globalStyles';

const LancamentoDespesaScreen = ({ navigation, route }) => {
    const { viagem } = route.params;
    const [descricao, setDescricao] = useState('');
    const [valor, setValor] = useState('');

    const handleLancamentoDespesa = async () => {
        try {
            await api.post(`http://192.168.1.2:3000/viagens/${viagem.id}/despesas`, {
                descricao,
                valor
            });
            Alert.alert('Despesa lançada com sucesso!');
            navigation.goBack();
        } catch (error) {
            Alert.alert('Erro ao lançar despesa.');
        }
    };

    return (
        <View style={globalStyles.container}>
            <TextInput
                style={globalStyles.input}
                placeholder="Descrição da despesa"
                placeholderTextColor="#888"
                onChangeText={setDescricao}
            />
            <TextInput
                style={globalStyles.input}
                placeholder="Valor"
                placeholderTextColor="#888"
                onChangeText={setValor}
                keyboardType="numeric"
            />
            <View style={globalStyles.buttonContainer}>
                <Button color="#ffffff" title="Lançar Despesa" onPress={handleLancamentoDespesa} />
            </View>
        </View>
    );
};

export default LancamentoDespesaScreen;
