import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { enableScreens } from 'react-native-screens';
import Icon from 'react-native-vector-icons/FontAwesome';
import Home from './Home';
import React from 'react'
import CreatePost from './CreatePost';

const App = () => {

  enableScreens();

  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            title: 'Home',
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, size }) => (
              <Icon name="home" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="addPost"
          component={CreatePost}
          options={{
            title: 'add post',
            tabBarLabel: 'post',
            tabBarIcon: ({ color, size }) => (
              <Icon name="plus-square-o" color={color} size={size} />
            ),
          }}
        />

        <Tab.Screen
          name="Settings"
          component={Home}
          options={{
            title: 'settings',
            tabBarLabel: 'settings ',
            tabBarIcon: ({ color, size }) => (
              <Icon name="home" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>



  )
}

export default App

const styles = StyleSheet.create({})