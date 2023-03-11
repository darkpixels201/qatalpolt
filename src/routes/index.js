import { View, Text } from 'react-native'
import React from 'react'
import MainStack from './MainStack/MainStack'
import External from '../Screens/External'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import AuthStack from './AuthStack/AuthStack'

const Stack = createStackNavigator();

const RootNavigator = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="MainStack">
      <Stack.Screen
        name="MainStack"
        component={MainStack}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="AuthStack"
        component={AuthStack}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  </NavigationContainer>
  )
}

export default RootNavigator