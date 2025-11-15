import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import AndroidLogo from '../screens/androidlogo/AndroidLogo';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator initialRouteName="AndroidLogo">
      <Stack.Screen
        name="Android"
        component={AndroidLogo}
        options={{
          headerShown: false,
          animation: 'slide_from_right',
        }}
      />
    </Stack.Navigator>
  );
};
export default AuthStack;
