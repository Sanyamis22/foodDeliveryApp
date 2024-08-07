import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Text, View} from 'react-native';
import Home from '../screens/home-page/Home';
import Profile from '../screens/profile/Profile';
import FoodForm from '../screens/add-form/AddForm';

// Create the Tab Navigator
const Tab = createBottomTabNavigator();
const navigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Profile" component={Profile} />
        <Tab.Screen name="Form" component={FoodForm} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default navigation;
