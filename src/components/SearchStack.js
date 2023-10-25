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

      <Stack.Screen name="carCategory" component={CarDetail}
        options={{ headerShown: false }} />

      <Stack.Screen name="CategoriesFilter" component={CategoriesFilter}
        options={{ headerShown: false }} />

      <Stack.Screen name="CarCategoriesFilter" component={CarCategotyFilter}
        options={{ headerShown: false }} />
    </Stack.Navigator>
  )
}

export default SearchStack

const styles = StyleSheet.create({})