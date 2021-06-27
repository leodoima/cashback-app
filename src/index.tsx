import React from 'react';
import { View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import Welcome from './pages/Welcome';
import DescriptionOne from './pages/Descripton/DescriptionOne';
import DescriptionTwo from './pages/Descripton/DescriptionTwo';
import DescriptionThree from './pages/Descripton/DescriptionThree';

const Index: React.FC = () => (
  <View style={{ flex: 1, backgroundColor: '#ffffff' }}>
    <StatusBar backgroundColor="#ffffff" />

    <DescriptionThree />
  </View>
);

export default Index;
