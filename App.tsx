import React from 'react';
import {Provider} from 'react-redux';
import {persistor, store} from './src/store/store';
import MainNavigation from './src/navigation/mainNavigation';
import {PersistGate} from 'redux-persist/integration/react';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <MainNavigation />
      </PersistGate>
    </Provider>
  );
};

export default App;
