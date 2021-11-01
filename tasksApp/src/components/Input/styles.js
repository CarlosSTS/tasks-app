import styled, {css} from 'styled-components/native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import {fonts} from '../../common/fonts';
import {colors} from '../../common/colors';

export const Container = styled.View`
  width: 100%;
  height: 46px;
  padding: 0 16px;
  background: ${colors.backgroundInput};
  border-radius: 4px;
  margin-bottom: 8px;
  border-width: 2px;
  border-color: ${colors.black};
  flex-direction: row;
  align-items: center;
  ${props =>
    props.isErrored &&
    css`
      border-color: ${colors.error};
    `}
  ${props =>
    props.isFocused &&
    css`
      border-color: ${colors.blueLight};
    `}
`;

export const Icon = styled(FeatherIcon)`
  margin-right: 16px;
`;
export const TextInput = styled.TextInput`
  flex: 1;
  color: ${colors.white};
  font-size: 16px;
  font-family: ${fonts.RobotoRegular};
`;

export const ErrorValue = styled.Text`
  color: ${colors.error};
  font-size: 14px;
  font-family: ${fonts.RobotoRegular};
`;
