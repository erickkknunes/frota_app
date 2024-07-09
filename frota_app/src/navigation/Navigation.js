import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CadastroScreen from '../screens/CadastroScreen';
import DetalhesViagemScreen from '../screens/DetalhesViagemScreen';
import LancamentoDespesaScreen from '../screens/LancamentoDespesaScreen';
import LancamentoViagemScreen from '../screens/LancamentoViagemScreen';
import ListaViagensScreen from '../screens/ListaViagensScreen';
import LoginScreen from '../screens/LoginScreen';

const Stack = createStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Login"
                    component={LoginScreen}
                    options={{
                        title: '', // Remover título
                        headerStyle: {
                            backgroundColor: '#121212', // Deixar transparente
                            elevation: 0, // Remover sombra no Android
                            shadowOpacity: 0, // Remover sombra no iOS
                        },
                        headerTintColor: '#ffffff', // Cor do texto e dos ícones
                        headerTitleStyle: {
                            fontWeight: 'bold', // Texto em negrito
                        },
                        headerBackTitleVisible: true, // Ocultar texto do botão de voltar no iOS
                    }}
                />
                <Stack.Screen
                    name="Cadastro"
                    component={CadastroScreen}
                    options={{
                        title: '', // Remover título
                        headerStyle: {
                            backgroundColor: '#121212', // Deixar transparente
                            elevation: 0, // Remover sombra no Android
                            shadowOpacity: 0, // Remover sombra no iOS
                        },
                        headerTintColor: '#ffffff', // Cor do texto e dos ícones
                        headerTitleStyle: {
                            fontWeight: 'bold', // Texto em negrito
                        },
                        headerBackTitleVisible: true, // Ocultar texto do botão de voltar no iOS
                    }}
                />
                <Stack.Screen
                    name="LancamentoViagem"
                    component={LancamentoViagemScreen}
                    options={{
                        title: '', // Remover título
                        headerStyle: {
                            backgroundColor: '#121212', // Deixar transparente
                            elevation: 0, // Remover sombra no Android
                            shadowOpacity: 0, // Remover sombra no iOS
                        },
                        headerTintColor: '#ffffff', // Cor do texto e dos ícones
                        headerTitleStyle: {
                            fontWeight: 'bold', // Texto em negrito
                        },
                        headerBackTitleVisible: true, // Ocultar texto do botão de voltar no iOS
                    }}
                />
                <Stack.Screen
                    name="ListaViagens"
                    component={ListaViagensScreen}
                    options={{
                        title: '', // Remover título
                        headerStyle: {
                            backgroundColor: '#121212', // Deixar transparente
                            elevation: 0, // Remover sombra no Android
                            shadowOpacity: 0, // Remover sombra no iOS
                        },
                        headerTintColor: '#ffffff', // Cor do texto e dos ícones
                        headerTitleStyle: {
                            fontWeight: 'bold', // Texto em negrito
                        },
                        headerBackTitleVisible: true, // Ocultar texto do botão de voltar no iOS
                    }}
                />
                <Stack.Screen
                    name="DetalhesViagem"
                    component={DetalhesViagemScreen}
                    options={{
                        title: '', // Remover título
                        headerStyle: {
                            backgroundColor: '#121212', // Deixar transparente
                            elevation: 0, // Remover sombra no Android
                            shadowOpacity: 0, // Remover sombra no iOS
                        },
                        headerTintColor: '#ffffff', // Cor do texto e dos ícones
                        headerTitleStyle: {
                            fontWeight: 'bold', // Texto em negrito
                        },
                        headerBackTitleVisible: true, // Ocultar texto do botão de voltar no iOS
                    }}
                />
                <Stack.Screen
                    name="LancamentoDespesa"
                    component={LancamentoDespesaScreen}
                    options={{
                        title: '',
                        headerStyle: {
                            backgroundColor: '#121212',
                            elevation: 0,
                            shadowOpacity: 0,
                        },
                        headerTintColor: '#ffffff',
                        headerTitleStyle: {
                            fontWeight: 'bold', // Texto em negrito
                        },
                        headerBackTitleVisible: true,
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;
