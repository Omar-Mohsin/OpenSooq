import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Dimensions } from 'react-native';

const PostDetail = ({ route }) => {
  const { post } = route.params;

  const images = [
    post.image,
    'https://placehold.co/600x400/png',
    'https://placehold.co/600x400/png',
    'https://placehold.co/600x400/png',
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.imageContainer}>
        <ScrollView horizontal pagingEnabled>
          {images.map((image, index) => (
            <Image key={index} source={{ uri: image }} style={styles.postImage} />
          ))}
        </ScrollView>
      </View>
      <View style={styles.postInfo}>
        <Text style={styles.postTitle}>{post.title}</Text>
        <Text style={styles.postCategory}>{post.category}</Text>
        <Text style={styles.postContent}>{post.content}</Text>
        <Text style={styles.postPrice}>${post.price}</Text>
        
      </View>
    </ScrollView>
  );
};

export default PostDetail;

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  imageContainer: {
    height: windowWidth * 0.7,
    marginBottom: 20,
  },
  postImage: {
    width: windowWidth,
    height: windowWidth * 0.7,
    resizeMode: 'cover',
  },
  postInfo: {
    backgroundColor: 'white',
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  postTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  postCategory: {
    fontSize: 18,
    color: '#FF5722',
    marginBottom: 10,
  },
  postPrice: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FF5722',
  },
  postContent: {
    fontSize: 16,
    color: '#666',
    marginBottom: 20,
  },
});
