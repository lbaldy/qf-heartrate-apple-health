import {applyMiddleware, combineReducers, createStore} from 'redux';
import ReduxThunk from 'redux-thunk';
import AuthenticationReducer from './reducers/AuthenticationReducer';
import {composeWithDevTools} from 'redux-devtools-extension';
import HealthKitReducer from './reducers/HealtKitReducer';

import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(
  persistConfig,
  combineReducers({
    AuthenticationReducer,
    HealthKitReducer,
  }),
);

const store = createStore(
  persistedReducer,
  {},
  composeWithDevTools(applyMiddleware(ReduxThunk)),
);

export default () => {
  const persistor = persistStore(store);
  return {store, persistor};
};
