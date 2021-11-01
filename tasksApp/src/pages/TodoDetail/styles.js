import styled from 'styled-components/native';
import {colors} from '../../common/colors';

export const Container = styled.View`
  flex: 1;
  padding: 0 24px;
`;

export const Todo = styled.View.attrs({
  shadowOffeset: {
    width: 4,
    height: 4,
  },
  elevation: 4,
})`
  padding: 24px;
  border-radius: 8px;
  background-color: ${colors.white};
  margin-bottom: 16px;
  margin-top: 24px;
`;

export const TodoProperty = styled.Text.attrs({})`
  font-size: 14px;
  color: ${colors.textBold};
  font-weight: bold;
`;

export const TodoValue = styled.Text.attrs({})`
  margin-top: 8px;
  font-size: 15px;
  margin-bottom: 24px;
  color: ${colors.text};
`;

export const TodoActions = styled.View`
  position: absolute;
  flex-direction: row;
  right: 16px;
  top: 16px;
`;
