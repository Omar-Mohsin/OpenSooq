import { StyleSheet, Text, View, Pressable, ScrollView } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const Search = () => {
  const navigation = useNavigation();

  const categories = ['Car', 'House', 'Phone', 'Pc'];

  return (
    <View contentContainerStyle={styles.container}>
      
        <View style={styles.row}>
          {categories.map((category) => (
            <Pressable
              key={category}
              style={styles.category}
              onPress={() => {
                navigation.navigate('Category');
              }}
            >
              <Text style={styles.categoryText}>{category}</Text>
            </Pressable>
          ))}
        </View>
      
    </View>
  );
}

// Helper function to chunk the array into rows
function chunkArray(array, chunkSize) {
  const chunkedArray = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    chunkedArray.push(array.slice(i, i + chunkSize));
  }
  return chunkedArray;
}

export default Search;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  category: {
    margin: 10,
    padding: 20,
    backgroundColor: '#EEEEEE',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    flex: 1,
  },
  categoryText: {
    fontWeight: 'bold',
    fontSize: 20,
  },
});
