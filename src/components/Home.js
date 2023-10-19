import React from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput } from 'react-native';
import { useSelector } from 'react-redux';
import { SelectUser } from '../../redux/auth/authSlice';
import { SelectPosts } from '../../redux/posts/postsSlice';

const Home = () => {
  const posts = useSelector(SelectPosts);

  return (
    <View style={styles.container}>
      <View style={styles.searchBar}>
        <TextInput
          style={styles.searchInput}
          placeholder="Post Title"
          placeholderTextColor="gray" // Add placeholder text color
        />
      </View>
      <ScrollView>
        {posts?.length > 0 ? (
          <View style={styles.postsContainer}>
            {posts.map((post) => (
              <View key={post.id} style={styles.postCard}>
                <Text style={styles.userName}>{post.user.name}</Text>
                <Text style={styles.postTitle}>{post.title}</Text>
                <Text style={styles.postContent}>{post.content}</Text>
              </View>
            ))}
          </View>
        ) : (
          <Text style={styles.noPostsText}>There are no posts at the moment.</Text>
        )}
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D2E0FB',
  },
  searchBar: {

    height: 40,
    width: '80%',
    marginVertical: 10,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderRadius: 25, // Increased border radius for rounded corners
    borderColor: '#ccc',
    backgroundColor: 'white',
    flexDirection: 'row', // Arrange icon and input horizontally
    alignItems: 'center', // Center-align the content
  },
  searchInput: {
  flex: 1, // Allows the input to expand and take up remaining space
  fontSize: 16,
  color: 'black', // Color for the text
},

  postsContainer: {
    padding: 16,
  },
  postCard: {
    backgroundColor: '#F9F3CC',
    borderRadius: 10,
    padding: 16,
    marginBottom: 16,
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
    color: 'black', // Post title color
  },
  postContent: {
    fontSize: 14,
    color: '#555',
  },
  noPostsText: {
    fontSize: 18,
    textAlign: 'center',
    margin: 16,
    color: 'black',
  },
});
