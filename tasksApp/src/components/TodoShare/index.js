import React from 'react';
import {useRoute} from '@react-navigation/native';

import {Alert, Linking} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {colors} from '../../common/colors';

const TodoShare = () => {
  const {todo} = useRoute().params;
  console.tron.log('PARAMS', todo);
  let message = `Olá ${todo.owner}, sua tarefa é ${todo.title} e começa ás ${todo.hours} `;

  async function sendWhatsapp() {
    try {
      await Linking.openURL(`whatsapp://send?&text=${message}`);
    } catch (err) {
      Alert.alert('Oops', 'Não conseguimos acessar seu aplicativo');
    }
  }
  return (
    <MaterialCommunityIcons
      name="share-variant"
      size={32}
      color={colors.white}
      style={{marginRight: 16}}
      onPress={sendWhatsapp}
    />
  );
};

export default TodoShare;
