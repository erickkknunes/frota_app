import React, { useEffect, useState } from 'react';
import { View, Button, ScrollView } from 'react-native';
import api from '../api/api';
import { globalStyles } from '../styles/globalStyles';

const ListaViagensScreen = ({ navigation }) => {
    const [viagens, setViagens] = useState([]);

    useEffect(() => {
        const fetchViagens = async () => {
            try {
                const response = await api.get('http://192.168.1.2:3000/viagens');
                setViagens(response.data);
            } catch (error) {
                console.error('Erro ao carregar viagens:', error);
            }
        };
        fetchViagens();
    }, []);

    return (
        <ScrollView style={globalStyles.container}>
            {viagens.map((viagem, index) => (
                <View key={index} style={globalStyles.buttonContainer}>
                    <Button
                        color="#ffffff"
                        title={viagem.nomeViagem}
                        onPress={() => navigation.navigate('DetalhesViagem', { viagem })}
                    />
                </View>
            ))}
        </ScrollView>
    );
};

export default ListaViagensScreen;
