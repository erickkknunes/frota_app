import React from 'react';
import { StyleSheet, View } from 'react-native';
import { globalStyles } from './src/styles/globalStyles';
import Navigation from './src/navigation/Navigation';

export default function App() {
  return (
    <View style={globalStyles.container}>
      <Navigation />
    </View>
  );
}
