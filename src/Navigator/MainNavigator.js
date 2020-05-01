import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import LoginScreen from '../View/login/LoginScreen';
import RegisterScreen from '../View/register/Register';

const Stack = createStackNavigator();

function mainNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Register"
          component={RegisterScreen}
          options={{title: 'Register Form'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default mainNavigator;
