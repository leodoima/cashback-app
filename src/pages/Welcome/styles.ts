import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  font-size: 16px;
  color: #1f1927;
  font-weight: bold;
  text-align: center;
  margin-top: 50px;
`;

export const Description = styled.Text`
  width: 250px;
  padding-top: 30px;

  color: #1c2024;
  opacity: 0.75;

  font-size: 14px;
  text-align: center;
`;

export const TextLogin = styled.Text`
  text-align: center;
  margin-top: 15px;

  color: #fff;
  font-weight: bold;
`;

export const Button = styled.TouchableOpacity`
  width: 150px;
  height: 50px;
  margin-top: 100px;

  border-radius: 20px;
  background-color: #1f1927;
`;

export const Account = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;

  position: absolute;
  left: 0;
  bottom: 30px;
  right: 0;
`;

export const AccountText = styled.Text``;

export const ButtonAccount = styled.TouchableOpacity`
  margin-left: 5px;
`;

export const ButtonAccountText = styled.Text`
  color: #ff7115;
  font-weight: bold;
`;
