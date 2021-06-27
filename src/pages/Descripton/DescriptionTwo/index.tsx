import React from 'react';
import { Image } from 'react-native';
import Icon from '@expo/vector-icons/Feather';

import moneyOutImg from '../../../assets/money-out.png';

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
  return (
    <Container>
      <Image source={moneyOutImg} />

      <Description>
        <DescriptionTitle>Informe seu código</DescriptionTitle>

        <DescriptionText>
          Ao realizar o pagamento das compras realizadas, informe ao lojista o
          seu código da plataforma.
        </DescriptionText>
      </Description>

      <ButtonNext>
        <Icon name="arrow-right" size={24} color="#fff" />
      </ButtonNext>

      <ButtonSkip>
        <ButtonSkipText>Pular</ButtonSkipText>
      </ButtonSkip>
    </Container>
  );
};

export default DescriptionOne;
