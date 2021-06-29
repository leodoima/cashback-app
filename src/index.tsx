import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Welcome from './pages/Welcome';
import DescriptionOne from './pages/Descripton/DescriptionOne';
import DescriptionTwo from './pages/Descripton/DescriptionTwo';
import DescriptionThree from './pages/Descripton/DescriptionThree';

const Auth = createStackNavigator();

const Index: React.FC = () => (
  <Auth.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: { backgroundColor: '#fff' },
    }}
  >
    <Auth.Screen name="Welcome" component={Welcome} />
    <Auth.Screen name="DescriptionOne" component={DescriptionOne} />
    <Auth.Screen name="DescriptionTwo" component={DescriptionTwo} />
    <Auth.Screen name="DescriptionThree" component={DescriptionThree} />
  </Auth.Navigator>
);

export default Index;
