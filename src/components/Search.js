import { StyleSheet, Text, View  , Pressable} from 'react-native'

import React from 'react'
import {useNavigation} from '@react-navigation/native';

const Search = () => {
  const navigation = useNavigation();


  return (
    <View style={styles.container}>
      <View style={styles.categoriesContainer} >
        <Pressable style={styles.category} onPress={() => {
        navigation.navigate('Category');
      }}>
          <Text style = { styles.categoryText}>Car</Text>
        </Pressable>
        <View style={styles.category}>
          <Text style = { styles.categoryText}>House</Text>
        </View>
      </View>
      <View style={styles.categoriesContainer}>
        <View style={styles.category}>
          <Text style = { styles.categoryText} >Phone</Text>
        </View>
        <View style={styles.category}>
          <Text style = { styles.categoryText}>Pc</Text>
        </View>
      </View>
    </View>
  )
}

export default Search

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor :  'white'
  },
  categoriesContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  category: {
    flex: 1,
    margin: 10,
    padding: 20,
    backgroundColor : '#EEEE',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius : 10
  },

  categoryText :   { 
    fontWeight : 'bold',
    fontFamily : '30'
  } , 

})
