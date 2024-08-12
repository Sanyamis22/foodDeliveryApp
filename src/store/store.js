import {configureStore} from '@reduxjs/toolkit';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import foodReducer from './foodSlice';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, foodReducer);

export const store = configureStore({
  reducer: {
    food: persistedReducer,
  },
});

export const persistor = persistStore(store);
