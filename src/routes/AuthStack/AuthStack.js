import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
// import {createStackNavigator} from '@react-navigation/stack';
// import LoginScreen from '../../screens/Auth/Login/LoginScreen';
// import LoginSignup from '../../screens/Auth/LoginSignup/LoginSignup';
// import Signup from '../../screens/Auth/Signup/Signup';
// import ProfileDetail from '../../screens/Auth/ProfileDetail/ProfileDetail';
import External from '../../Screens/External';

const AuthStack = ({navigation}) => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      // initialRouteName={"Signup"}
    >
      <Stack.Screen name="External" component={External} />
      {/* <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="ProfileDetail" component={ProfileDetail} /> */}
    </Stack.Navigator>
  );
};

export default AuthStack;
