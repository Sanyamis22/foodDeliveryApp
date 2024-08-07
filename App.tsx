import React from 'react';
import {Provider} from 'react-redux';
import {store} from './src/store/store';
import Home from './src/screens/home-page/Home';
import AddForm from './src/screens/add-form/AddForm';
import Routes from './src/navigation/Routes';

const App = () => {
  return (
    <Provider store={store}>
      {/* <AddForm /> */}
      <Routes />
    </Provider>
  );
};

export default App;
