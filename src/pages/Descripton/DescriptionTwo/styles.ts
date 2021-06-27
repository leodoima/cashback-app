import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Description = styled.View`
  margin-top: 50px;
  margin-bottom: 100px;
`;

export const DescriptionTitle = styled.Text`
  font-size: 16px;
  color: #1f1927;
  font-weight: bold;
  text-align: center;
`;

export const DescriptionText = styled.Text`
  width: 250px;
  padding-top: 30px;

  color: #1c2024;
  opacity: 0.75;

  font-size: 14px;
  text-align: center;
`;

export const ButtonNext = styled.TouchableOpacity`
  background: #1c2024;
  border-radius: 20px;
  width: 45px;
  height: 45px;

  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const ButtonSkip = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;

  position: absolute;
  left: 0;
  bottom: 30px;
  right: 0;
`;

export const ButtonSkipText = styled.Text`
  color: #ff7115;
  font-weight: bold;
`;
