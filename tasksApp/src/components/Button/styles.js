import styled from 'styled-components/native';
import FeatherIcon from 'react-native-vector-icons/Feather';

import {RectButton} from 'react-native-gesture-handler';
import {colors} from '../../common/colors';
import {fonts} from '../../common/fonts';

export const Container = styled(RectButton)`
  width: 100%;
  height: 46px;
  background: ${colors.statusbar};
  border-radius: 4px;
  margin-top: 8px;

  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Icon = styled(FeatherIcon)``;

export const ButtonText = styled.Text`
  padding: 0 16px;
  font-family: ${fonts.RobotoSlab};
  color: ${colors.white};
  font-size: 18px;
`;
