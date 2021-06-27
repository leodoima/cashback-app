import React from 'react';
import { View, Image } from 'react-native';

import {
  Title,
  Container,
  Description,
  Button,
  TextLogin,
  Account,
  AccountText,
  ButtonAccount,
  ButtonAccountText,
} from './styles';

import welcomeImg from '../../assets/save-money.png';

const Welcome: React.FC = () => {
  return (
    <>
      <Container>
        <Image source={welcomeImg} />

        <View>
          <Title>Poupe o seu dinheiro</Title>

          <Description>
            Realize suas compras e receba dinheiro de volta. Utilize
            gratuitamente nossa ferramennta de cashback.
          </Description>
        </View>

        <Button>
          <TextLogin>Entrar</TextLogin>
        </Button>

        <Account>
          <AccountText>Ainda não possui uma conta?</AccountText>
          <ButtonAccount>
            <ButtonAccountText>Clique aqui</ButtonAccountText>
          </ButtonAccount>
        </Account>
      </Container>
    </>
  );
};

export default Welcome;
