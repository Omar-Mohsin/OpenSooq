import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { SelectUser } from '../../redux/auth/authSlice';
import { useDispatch, useSelector } from 'react-redux';
import { addPost } from '../../redux/posts/postsSlice';
import { nanoid } from '@reduxjs/toolkit';
import { SelectPosts } from '../../redux/posts/postsSlice';
import { useNavigation } from '@react-navigation/native';

const CreatePost = () => {
  const navigation = useNavigation();
  const posts = useSelector(SelectPosts);
  const user = useSelector(SelectUser);
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState();

  const handlePostButton = () => {
    if (content && title) {
      dispatch(
        addPost({
          id: nanoid(),
          user: user,
          title: title,
          content: content,
          date : new Date(),
        })
      );
      setContent('')
      setTitle('')
      navigation.navigate('Home');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Create a New Post</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Post Title</Text>
        <TextInput
          style={styles.input}
          placeholder="Post Title"
          onChangeText={setTitle}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Content</Text>
        <TextInput
          style={styles.input}
          placeholder="Post Content"
          onChangeText={setContent}
          multiline={true}
          numberOfLines={4}
        />
      </View>
      <TouchableOpacity
        style={styles.postButton}
        onPress={handlePostButton}
      >
        <Text style={styles.buttonText}>Post</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CreatePost;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D2E0FB',
    paddingHorizontal: 16,
    paddingTop: 20,
  },
  heading: {
    fontSize: 24,
    marginTop: 40,
    color : 'black',
    marginBottom: 20,
    textAlign: 'center',
    fontWeight: 'bold',

  },
  inputContainer: {
    marginTop : 30,
    marginBottom: 20,
  },
  inputLabel: {
    color : 'black',
    fontSize: 18,
  
  },
  input: {
    height: 40,
    width: '100%',
    marginVertical: 10,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#ccc',
    backgroundColor: 'white',
  },
  postButton: {
    backgroundColor: '#F9F3CC', 
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'black',
    fontSize: 18,
    textAlign: 'center',
  },
});
