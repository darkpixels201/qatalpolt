import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../Screens/HomeScreen';
import Books from '../Screens/Books';
import Sale from '../Screens/Sale';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator initialRouteName="HomeScreen" screenOptions={{}}>
    <Tab.Screen
      name={'HomeScreen'}
      component={HomeScreen}
      options={{
        tabBarLabel: 'Home',
        headerShown: false,
      
      }}
    />
    <Tab.Screen
      name={'Books'}
      component={Books}
      options={{
        tabBarLabel: 'Book',
        headerShown: false,

      }}
    />
    <Tab.Screen
      name={'Sale'}
      component={Sale}
      options={{
        tabBarLabel: 'Sale',
        headerShown: false,
      }}
    />
  </Tab.Navigator>
  )
}

export default BottomTabNavigator