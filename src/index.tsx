import React from 'react';
import { View, StyleSheet} from 'react-native';
import { StatusBar } from 'expo-status-bar';

const Index: React.FC =() => (
  <View style={{flex: 1, backgroundColor: '#ffffff'}}>
    <StatusBar style="dark" backgroundColor="#ffffff" />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Index;