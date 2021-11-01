import styled from 'styled-components/native';

import {colors} from '../../common/colors';
import {fonts} from '../../common/fonts';

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderText = styled.Text.attrs({
  numberOfLines: 1,
})`
  font-size: 16px;
  color: ${colors.white};
  font-family: ${fonts.RobotoRegular};
`;

export const HeaderTextBold = styled.Text`
  font-weight: bold;
`;

export const Title = styled.Text.attrs({
  numberOfLines: 2,
})`
  margin-bottom: 24px;
  font-size: 24px;
  color: ${colors.white};
  font-family: ${fonts.RobotoRegular};
`;

export const Description = styled.Text.attrs({
  numberOfLines: 2,
})`
  font-size: 16px;
  color: ${colors.white};
  line-height: 24px;
  font-family: ${fonts.RobotoSlab};
`;
