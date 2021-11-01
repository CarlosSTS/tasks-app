import React from 'react';
import {Alert} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useDispatch} from 'react-redux';

import {signOut} from '../../store/modules/auth/actions';

import {colors} from '../../common/colors';

const HeaderRight = () => {
  const dispatch = useDispatch();

  function handleSignOut() {
    dispatch(signOut());
  }
  return (
    <MaterialCommunityIcons
      name="login"
      size={32}
      color={colors.white}
      style={{marginRight: 16}}
      onPress={() =>
        Alert.alert(
          'Saindo...',
          'Deseja realmente sair da aplicação ?',
          [
            {
              text: 'Não 🙏🏻',
              style: 'cancel',
            },
            {
              text: 'Sim',
              onPress: () => {
                try {
                  handleSignOut();
                } catch (err) {
                  Alert.alert('Erro', 'Tente novamente mais tarde');
                }
              },
            },
          ],
          {
            cancelable: false,
          },
        )
      }
    />
  );
};

export default HeaderRight;
