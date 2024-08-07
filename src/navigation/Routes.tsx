import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Text, View} from 'react-native';
import Home from '../screens/home-page/Home';
import Profile from '../screens/profile/Profile';
import FoodForm from '../screens/add-form/AddForm';
import {enableScreens} from 'react-native-screens';

// Create the Tab Navigator
const Tab = createBottomTabNavigator();

const Routes = () => {
  enableScreens();
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen
          name="Form"
          component={FoodForm}
          options={{headerShown: false}}
        />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
