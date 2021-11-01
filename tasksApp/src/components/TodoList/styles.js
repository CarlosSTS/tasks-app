import styled from 'styled-components/native';

import {colors} from '../../common/colors';
import {fonts} from '../../common/fonts';

export const TodoListView = styled.FlatList.attrs({})`
  margin-top: 8px;
`;

export const Todo = styled.View.attrs({
  shadowOffeset: {
    width: 4,
    height: 4,
  },
  elevation: 4,
})`
  padding: 24px;
  background-color: ${colors.white};
  margin-bottom: 16px;
  border-radius: 8px;
`;

export const ListEmptyComponent = styled.Text`
  color: ${colors.black};
  font-size: 20px;
  font-family: ${fonts.RobotoRegular};
`;

export const TodoProperty = styled.Text.attrs({
  numberOfLines: 1,
})`
  font-size: 14px;
  color: ${colors.textBold};
  font-family: ${fonts.RobotoSlab};
`;

export const TodoValue = styled.Text.attrs({
  numberOfLines: 1,
})`
  margin-top: 8px;
  font-size: 15px;
  margin-bottom: 24px;
  color: ${colors.text};
  font-family: ${fonts.RobotoRegular};
`;
export const ButtonDetail = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const ButtonDetailText = styled.Text`
  color: ${colors.blue};
  font-size: 15px;
  font-family: ${fonts.RobotoSlab};
`;
