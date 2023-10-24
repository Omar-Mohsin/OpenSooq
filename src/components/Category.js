import { StyleSheet, Text, View, ScrollView, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { useSelector } from 'react-redux';
import { SelectPosts } from '../../redux/posts/postsSlice';

const Category = ({ route }) => {
  const { categoryName } = route.params;
  const posts = useSelector(SelectPosts);
  const filteredPosts = posts.filter((post) => post.category === categoryName);

  return (
    <View style={styles.Container}>
      <ScrollView>
        {filteredPosts.length > 0 ? (
          filteredPosts.map((post) => (
            <SafeAreaView key={post.id} style={styles.postCard}>
              <Text style={styles.userName}>{post.user.name}</Text>
              <Image source={{ uri: post.image }} style={styles.imagePost} />
              <Text style={styles.postTitle}>{post.title}</Text>
              <Text style={styles.postCategory}>{post.category}</Text>
              <Text style={styles.postContent}>{post.content}</Text>
              <Text style={styles.price}>${post.price}</Text>
              <Text style={styles.postDate}>
                Date: {new Date(post.date).toLocaleString()}
              </Text>
            </SafeAreaView>
          ))
        ) : (
          <Text style= {styles.noPostsText}>No {categoryName} Posts</Text>
        )}
      </ScrollView>
    </View>
  )
}

export default Category;

const styles = StyleSheet.create({
  Container: {
    height: '100%',
    marginTop: 20,
  },
  imagePost: {
    height: 300,
    width: '100%',
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
})
