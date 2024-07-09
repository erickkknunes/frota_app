import React, { useEffect, useState } from 'react';
import { View, Text, Button, FlatList, Alert } from 'react-native';
import api from '../api/api';
import { globalStyles } from '../styles/globalStyles';

const DetalhesViagemScreen = ({ navigation, route }) => {
    const { viagem } = route.params;
    const [despesas, setDespesas] = useState([]);
    const [totalDespesas, setTotalDespesas] = useState(0);
    const [lucro, setLucro] = useState(0);

    const fetchDespesas = async () => {
        try {
            const response = await api.get(`http://192.168.1.2:3000/viagens/${viagem.id}/despesas`);
            const { viagem: dadosViagem, totalDespesas: despesasTotais, lucro: lucroViagem } = response.data;
            setDespesas(dadosViagem.Despesas);
            setTotalDespesas(despesasTotais);
            setLucro(lucroViagem);
        } catch (error) {
            console.error('Erro ao carregar despesas:', error);
            Alert.alert('Erro ao carregar despesas.');
        }
    };

    useEffect(() => {
        fetchDespesas();
    }, []);

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            fetchDespesas();
        });

        return unsubscribe;
    }, [navigation]);

    const handleLancamentoDespesa = () => {
        navigation.navigate('LancamentoDespesa', { viagem });
    };

    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.title}>Detalhes da Viagem: {viagem.nomeViagem}</Text>
            <Text style={globalStyles.text}>Total do Frete: {viagem.valorFrete}</Text>
            <Text style={globalStyles.text}>Total de Despesas: {totalDespesas}</Text>
            <Text style={globalStyles.text}>Lucro: {lucro}</Text>
            <View style={globalStyles.buttonContainer}>
                <Button color="#ffffff" title="Lançar Despesa" onPress={handleLancamentoDespesa} />
            </View>
            <FlatList
                data={despesas}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View style={globalStyles.card}>
                        <Text style={globalStyles.text}>Descrição: {item.descricao}</Text>
                        <Text style={globalStyles.text}>Valor: {item.valor}</Text>
                    </View>
                )}
            />
        </View>
    );
};

export default DetalhesViagemScreen;
