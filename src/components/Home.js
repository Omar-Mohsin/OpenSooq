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
        <View style={styles.searchBarContainer}>
        <View style={styles.searchBar}>
          <TextInput
            placeholder='Search...'
            style={styles.searchInput}
            onChangeText={searchHandler}
          />
        </View>
      </View>
      {posts?.length > 0 ? (
        <View style={styles.contentContainer}>
          <ScrollView style={styles.postsContainer}>
            {filteredPosts.map((post) => (
              <Pressable key={post.id} style={styles.postCard} onPress={() =>
                navigation.navigate('Detail', { post })
              }>
                <Text style={styles.userName}>{post.user.name}</Text>
                <Image source={{ uri: post.image }} style={styles.imagePost} resizeMode="cover" />
                <Text style={styles.postTitle}>{post.title}</Text>
                <Text style={styles.postCategory}>{post.category}</Text>
                <Text style={styles.postContent}>{post.content}</Text>
                {post.category === 'Car' && <Text style={styles.postContent}>Brand: {post.brand}</Text>}
                <Text style={styles.price}>Price: ${post.price}</Text>
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
    backgroundColor: '#F4F4F4',
    height: '100%',
    paddingBottom: 40,
  },
  contentContainer: {
    marginTop: 10,
    paddingHorizontal: 20,
  },
  searchBarContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchBar: {
    width: '90%',
    height: 40,
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: 'black',
    padding: 10,
  },
  postsContainer: {
    marginTop: 20,
  },
  postCard: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 15,
    marginBottom: 20,
    elevation: 3,
  },
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 8,
  },
  postTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 8,
  },
  postCategory: {
    fontSize: 16,
    color: 'gray',
    marginBottom: 8,
  },
  postContent: {
    fontSize: 18,
    color: 'black',
    marginBottom: 8,
  },
  price: {
    fontSize: 22,
    color: 'green',
  },
  postDate: {
    fontSize: 16,
    color: 'blue',
  },
  noPostsText: {
    fontSize: 22,
    marginTop: 100,
    textAlign: 'center',
    margin: 16,
    color: 'black',
  },
  imagePost: {
    height: 200,
    width: '100%',
    marginTop: 20,
    marginBottom: 20,
    borderRadius: 10,
  },
});

export default Home;
