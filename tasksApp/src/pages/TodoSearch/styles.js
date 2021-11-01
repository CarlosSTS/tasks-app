import styled from 'styled-components/native';

import {colors} from '../../common/colors';
import {fonts} from '../../common/fonts';

export const Container = styled.View`
  flex: 1;
  padding: 0 30px;
`;

export const Title = styled.Text`
  color: ${colors.white};
  font-size: 22px;
  font-family: ${fonts.RobotoSlab};
  margin: 10px 0 24px;
`;
