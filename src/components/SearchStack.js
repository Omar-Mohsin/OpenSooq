import { StyleSheet, Text, View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import Search from './Search';
import Categories from './Categories';
import CarDetail from './CarDetail';
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
        <Stack.Screen name="Category" component={Categories}

        />
        <Stack.Screen name="carCategory" component={CarDetail}

/>

      </Stack.Navigator>
    )
}

export default SearchStack

const styles = StyleSheet.create({})