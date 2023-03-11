import {View, Text} from 'react-native';
import React from 'react';
import {createDrawerNavigator, DrawerContentScrollView, DrawerItemList} from '@react-navigation/drawer';
import News from '../Screens/News';
import HomeScreen from '../Screens/HomeScreen';
import BottomTabNavigator from './BottomTabNavigator';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {

    const DrawerHeaderContent = props => {
        return (
          <DrawerContentScrollView contentContainerStyle={{flex: 1}}>
            <View
              style={{
                backgroundColor: '#4f4f4f',
                height: 100,
                justifyContent: 'center',
                alignItems: 'center',
                top: -5,
              }}>
              <Text style={{color: '#fff'}}>Home</Text>
            </View>
            <DrawerItemList {...props} />
          </DrawerContentScrollView>
        );
      };
      
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerStyle: {
          backgroundColor: '#fff',
        },
      }}
      initialRouteName={"BottomTabNavigator"}
      drawerContent={DrawerHeaderContent}
      >
      <Drawer.Screen
        name={'BottomTabNavigator'}
        component={BottomTabNavigator}
        options={{
          drawerLabel: 'Home Screen',
        }}
      />

      <Drawer.Screen
        name={'News'}
        component={News}
        options={{
          drawerLabel: 'News',
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
