import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LanguageScreen from './language';
import LoginScreen from './login';
import ForgotPasswordScreen from './forget-password';
import VerificationScreen from './verification-code';
import ResetPasswordScreen from './reset-password';

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="language"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="language" component={LanguageScreen} />
        <Stack.Screen name="login" component={LoginScreen} />
        <Stack.Screen name="forgetpassword" component={ForgotPasswordScreen} />
        <Stack.Screen name="verification" component={VerificationScreen} />
        <Stack.Screen name="resetpassword" component={ResetPasswordScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
