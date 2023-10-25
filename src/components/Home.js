import React from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, Image, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useSelector } from 'react-redux';
import { SelectPosts } from '../../redux/posts/postsSlice';
import { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { fetchCars } from '../../redux/auth/Cars/carsSlice';
const Home = () => {
  const posts = useSelector(SelectPosts);
  const [searchField, setSearchField] = useState('');
  const [filteredPosts, setFilteredPosts] = useState(posts);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const searchHandler = (text) => {
    setSearchField(text);
  };

  useEffect(() => {
    const newFilteredPosts = posts.filter((post) => {
      return post.title.toLowerCase().includes(searchField.toLowerCase());
    });
    newFilteredPosts.sort((a, b) => new Date(b.date) - new Date(a.date));

    setFilteredPosts(newFilteredPosts);
  }, [posts, searchField]);

  useEffect(() => {
    dispatch(fetchCars());
}, []);

  return (
    <SafeAreaView style={styles.container}>
      {posts?.length > 0 ? (
        <View style={{ marginTop: 10 }}>
          <View style={styles.searchBar}>
            <TextInput
              placeholder='Search...'
              style={styles.searchInput}
              onChangeText={searchHandler}
            />
          </View>
          <ScrollView style={{ marginTop: 20 }} >
            {filteredPosts.map((post) => (
              <Pressable key={post.id} style={styles.postCard} onPress={() =>
                navigation.navigate('Detail', { post })

              } >
                <Text style={styles.userName}>{post.user.name}</Text>
                <Image source={{ uri: post.image }} style={styles.imagePost} resizeMode="contain" />
                <Text style={styles.postTitle}>{post.title}</Text>
                <Text style={styles.postCategory}>{post.category}</Text>
                <Text style={styles.postContent}>{post.content}</Text>
                <Text style={styles.price}>${post.price}</Text>
                <Text style={styles.postDate}>
                  Date: {new Date(post.date).toLocaleString()}
                </Text>
              </Pressable>
            ))}
          </ScrollView>
        </View>
      ) : (
        <Text style={styles.noPostsText}>There are no posts at the moment.</Text>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEEEEE',
    alignItems: 'center',
  },
  searchBar: {
    width: '80%',
    height: 40,
    marginVertical: 10,
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: 'black',
    padding: 5,
  },
  imagePost: {
    height: 300,
    width: 300,
    marginTop : 30,
    marginBottom : 30,

  },
  postCard: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 15,
    marginBottom: 20,
    elevation: 3,
  },
  userName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 8,
  },
  postTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 8,
  },
  postCategory: {
    fontSize: 14,
    color: 'gray',
    marginBottom: 8,
  },
  postContent: {
    fontSize: 17,
    color: 'black',
    marginBottom: 8,
  },
  price: {
    fontSize: 18,
    color: 'green',
  },
  postDate: {
    fontSize: 13,
    color: 'blue',
  },
  noPostsText: {
    fontSize: 18,
    marginTop: 100,
    textAlign: 'center',
    margin: 16,
    color: 'black',
  },
});

export default Home;