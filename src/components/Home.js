import React from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { useSelector } from 'react-redux';
import { SelectPosts } from '../../redux/posts/postsSlice';
import { useState, useEffect } from 'react';
const Home = () => {


  const posts = useSelector(SelectPosts);
  const [searchField, setsearchField] = useState('')
  const [filteredPosts, setFilterdPosts] = useState(posts);

  const searchHandler = (text) => {
    setsearchField(text)
  }

  useEffect(() => {
    const newFilteredPosts = posts.filter((post) => {
      return post.title.toLowerCase().includes(searchField.toLocaleLowerCase());
    });
    newFilteredPosts.sort((a, b) => new Date(b.date) - new Date(a.date));

    setFilterdPosts(newFilteredPosts);
  }, [posts, searchField])



  return (
    <SafeAreaView style={styles.container} >

      {posts?.length > 0 ? (
        <View>
          <View style={styles.searchBar}>

            <TextInput
              placeholder='Search'
              style={styles.searchInput}
              onChangeText={searchHandler}
            >
            </TextInput>
          </View>
          <ScrollView style={styles.postsContainer}>
            {filteredPosts.map((post) => (
              <SafeAreaView key={post.id} style={styles.postCard}>
                <Text style={styles.userName}>{post.user.name}</Text>
                <Text style={styles.postTitle}>{post.title}</Text>
                <Text style={styles.postTitle}>{post.category}</Text>
                <Text style={styles.postContent}>{post.content}</Text>

                <Text style={styles.price}>${post.price}</Text>

                <Text style={styles.postDate}>
                  Date: {new Date(post.date).toLocaleString()}
                </Text>
              </SafeAreaView>
            ))}
          </ScrollView>
        </View>
      ) : (
        <Text style={styles.noPostsText}>There are no posts at the moment.</Text>
      )}
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 60,
    backgroundColor: '#D2E0FB',
  },
  searchBar: {

    height: 40,
    width: '100%',
    marginVertical: 10,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderRadius: 25,
    borderColor: '#ccc',
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchInput: {

    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
    fontSize: 16,
    color: 'black',
  },

  postsContainer: {
    padding: 16,
  },

  postCard: {
    backgroundColor: '#F9F3CC',
    borderRadius: 10,
    padding: 16,
    marginBottom: 25,
    elevation: 3,
    shadowColor: 'black',
    shadowRadius: 3,
  },
  userName: {

    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
    color: 'red',
  },
  postTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    color: 'black',
  },
  postContent: {
    fontSize: 17,
    color: '#555',
    marginBottom: 8,
  },
  price: { color: 'green', fontSize: 19 },
  postDate: {
    fontSize: 13,
    color: 'blue',
  },
  noPostsText: {
    fontSize: 18,
    textAlign: 'center',
    margin: 16,
    color: 'black',
  },
});
