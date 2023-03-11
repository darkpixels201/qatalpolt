/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import {Text, View} from 'react-native';
import DrawerNavigator from './Routes/DrawerNavigator';
import External from './Screens/External';

const Stack = createStackNavigator();

function App() {
  return (

      <NavigationContainer>
      <Stack.Navigator initialRouteName="DrawerNavigator">
        <Stack.Screen
          name="DrawerNavigator"
          component={DrawerNavigator}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="External"
          component={External}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>


  );
}

export default App;
