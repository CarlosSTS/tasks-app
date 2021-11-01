import styled from 'styled-components/native';
import {Platform} from 'react-native';

import {colors} from '../../common/colors';
import {fonts} from '../../common/fonts';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 0 30px ${Platform.OS === 'android' ? 150 : 40}px;
`;

export const Title = styled.Text`
  color: ${colors.white};
  font-size: 24px;
  font-family: ${fonts.RobotoSlab};
  margin: 64px 0 24px;
`;
