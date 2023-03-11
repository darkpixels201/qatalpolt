import {View, Text} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../Screens/HomeScreen';
import Books from '../Screens/Books';
import Sale from '../Screens/Sale';
import ArenaScreen from '../Screens/Main/ArenaScreen/ArenaScreen';
import ChatScreen from '../Screens/Main/ChatScreen/ChatScreen';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator  screenOptions={{}}>
      <Tab.Screen
        name={'HomeScreen'}
        component={ArenaScreen}
        options={{
          tabBarLabel: 'Home Screen',
          headerShown: false,
        }}
      />
      <Tab.Screen
        name={'BookStackNavigator'}
        component={ChatScreen}
        options={{
          tabBarLabel: 'Book Screen',
          headerShown: false,
        }}
      />
      <Tab.Screen
        name={'ContactStackNavigator'}
        component={Sale}
        options={{
          tabBarLabel: 'Contact Screen',
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
