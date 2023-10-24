import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './Home';
import PostDetail from './PostDetail';
const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomePage"
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen name="Detail" component={PostDetail} />
    </Stack.Navigator>
  );
};

export default HomeStack;