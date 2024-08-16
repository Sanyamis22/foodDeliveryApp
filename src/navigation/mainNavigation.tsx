import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AuthRoutes from './AuthRoutes';
import Routes from './Routes';
import {NavigationContainer} from '@react-navigation/native';
import {useSelector} from 'react-redux';

const Stack = createNativeStackNavigator();

const mainNavigation = () => {
  const {isAuthenticated} = useSelector(state => state.auth);
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {isAuthenticated ? (
          <Stack.Screen
            name="tabs"
            component={Routes}
            options={{headerShown: false}}
          />
        ) : (
          <Stack.Screen
            name="auth-routes"
            component={AuthRoutes}
            options={{headerShown: false}}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default mainNavigation;

const styles = StyleSheet.create({});
