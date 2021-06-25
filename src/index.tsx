import React from 'react';
import { View, Text} from 'react-native';
import { StatusBar } from 'expo-status-bar';

const Index: React.FC =() => (
  <View style={{flex: 1, backgroundColor: '#ffffff'}}>
    <StatusBar style="dark" backgroundColor="#ffffff" />

    <Text>Poupe o seu dinheiro</Text>
  </View>
);

export default Index;