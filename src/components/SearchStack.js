import { StyleSheet, Text, View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import Search from './Search';
import CarDetail from './CarDetail';
import React from 'react'
import CategoriesFilter from './CategoriesFilter';
import CarCategotyFilter from './CarCategotyFilter';
const SearchStack = () => {

  const Stack = createStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Search"
        component={Search}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Category" component={Search} />

      <Stack.Screen name="Cars Category" component={CarDetail}
         />

      <Stack.Screen name="Post" component={CategoriesFilter}
         />

      <Stack.Screen name="Cars Posts" component={CarCategotyFilter} />
    </Stack.Navigator>
  )
}

export default SearchStack

const styles = StyleSheet.create({})