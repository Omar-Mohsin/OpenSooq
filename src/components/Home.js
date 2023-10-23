import React from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useSelector } from 'react-redux';
import { SelectPosts } from '../../redux/posts/postsSlice';
import { useState, useEffect } from 'react';

const Home = () => {
  const posts = useSelector(SelectPosts);
  const [searchField, setSearchField] = useState('');
  const [filteredPosts, setFilteredPosts] = useState(posts);

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

  return (
    <SafeAreaView style={styles.container}>
      {posts?.length > 0 ? (
        <View>
          <View style={styles.searchBar}>
            <TextInput
              placeholder='Search...'
              style={styles.searchInput}
              onChangeText={searchHandler}
            />
          </View>
          <ScrollView style={styles.postsContainer}>
            {filteredPosts.map((post) => (
              <SafeAreaView key={post.id} style={styles.postCard}>
                <Text style={styles.userName}>{post.user.name}</Text>
                <Text style={styles.postTitle}>{post.title}</Text>
                <Text style={styles.postCategory}>{post.category}</Text>
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
  postsContainer: {
  },
  postCard: {
    backgroundColor: 'white',
    padding : 10,
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
    textAlign: 'center',
    margin: 16,
    color: 'black',
  },
});

export default Home;
