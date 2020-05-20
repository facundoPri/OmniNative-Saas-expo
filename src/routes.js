import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Main from './pages/Main';
import SignIn from './pages/SignIn';

const Stack = createStackNavigator();

const SignInRoutes = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="SignIn" component={SignIn} />
    </Stack.Navigator>
  );
};

const MainRoutes = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Main" component={Main} />
    </Stack.Navigator>
  );
};

const Routes = () => {
  return <SignInRoutes />;
};

export default Routes;
