import {persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default reducers => {
  const persistedReducer = persistReducer(
    {
      key: 'todosApp',
      storage: AsyncStorage,
      whitelist: ['auth', 'user', 'todo'],
    },
    reducers,
  );
  return persistedReducer;
};
