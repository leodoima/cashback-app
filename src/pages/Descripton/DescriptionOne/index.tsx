import React from 'react';
import { Image } from 'react-native';
import Icon from '@expo/vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';

import creditCardImg from '../../../assets/credit-card.png';

import {
  Container,
  Description,
  DescriptionTitle,
  DescriptionText,
  ButtonNext,
  ButtonSkip,
  ButtonSkipText,
} from './styles';

const DescriptionOne: React.FC = () => {
  const navigation = useNavigation();

  return (
    <Container>
      <Image source={creditCardImg} />

      <Description>
        <DescriptionTitle>Realize suas compras</DescriptionTitle>

        <DescriptionText>
          Faça aquilo que há de melhor: compras. O que você já faz normalmente,
          agora pode trazer vantagens.
        </DescriptionText>
      </Description>

      <ButtonNext
        onPress={() => {
          navigation.navigate('DescriptionTwo');
        }}
      >
        <Icon name="arrow-right" size={24} color="#fff" />
      </ButtonNext>

      <ButtonSkip>
        <ButtonSkipText>Pular</ButtonSkipText>
      </ButtonSkip>
    </Container>
  );
};

export default DescriptionOne;
