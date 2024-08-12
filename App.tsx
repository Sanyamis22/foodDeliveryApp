import React from 'react';
import {Provider} from 'react-redux';
import {persistor, store} from './src/store/store';
import Routes from './src/navigation/Routes';
import {PersistGate} from 'redux-persist/integration/react';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Routes />
      </PersistGate>
    </Provider>
  );
};

export default App;
