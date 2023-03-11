import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';

const HomeScreen = ({navigation}) => {
  return (
    <View style={{marginTop: 50, marginLeft: 20}}>
      <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
        <View style={{height: 30, width: 30, backgroundColor: 'red'}}></View>
      </TouchableOpacity>
      <Text>HomeScreensdfdsfdsfffds</Text>
    </View>
  );
};

export default HomeScreen;
