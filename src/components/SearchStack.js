import { StyleSheet, Text, View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import Search from './Search';
import Category from './Category';
import React from 'react'
const SearchStack = () => {

    const Stack = createStackNavigator();

    return (
        <Stack.Navigator>
        <Stack.Screen
          name="Search"
          component={Search}
          options={{headerShown: false}}
          />
        <Stack.Screen name="Category" component={Category}

        />

      </Stack.Navigator>
    )
}

export default SearchStack

const styles = StyleSheet.create({})