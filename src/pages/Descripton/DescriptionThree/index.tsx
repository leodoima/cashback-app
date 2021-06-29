import React from 'react';
import { Image } from 'react-native';
import Icon from '@expo/vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';

import safeBoxImg from '../../../assets/safe-box.png';

import {
  Container,
  Description,
  DescriptionTitle,
  DescriptionText,
  ButtonNext,
  ButtonSkip,
  ButtonSkipText,
} from './styles';

const DescriptionThree: React.FC = () => {
  const navigation = useNavigation();

  return (
    <Container>
      <Image source={safeBoxImg} />

      <Description>
        <DescriptionTitle>Receba parte do dinheiro de volta</DescriptionTitle>

        <DescriptionText>
          Parte do valor gasto retornará para sua conta em forma de cashback.
          Este valor poderá ser utilizado novamente em futuras compras
        </DescriptionText>
      </Description>

      <ButtonNext
        onPress={() => {
          navigation.navigate('SignUp');
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

export default DescriptionThree;
