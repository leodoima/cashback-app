import React from 'react';
import { View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import Welcome from './pages/Welcome';

const Index: React.FC = () => (
  <View style={{ flex: 1, backgroundColor: '#ffffff' }}>
    <StatusBar backgroundColor="#ffffff" />

    <Welcome />
  </View>
);

export default Index;
