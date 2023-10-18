import { StyleSheet, Text, View, TextInput, Button } from 'react-native'
import { useState } from 'react'
import { SelectUser } from '../../redux/auth/authSlice'
import { useDispatch, useSelector } from 'react-redux'
import { addPost } from '../../redux/posts/postsSlice'
import { nanoid } from '@reduxjs/toolkit'
import { SelectPosts } from '../../redux/posts/postsSlice'
import { useNavigation } from '@react-navigation/native';

import React from 'react'

const CreatePost = () => {
  const navigation = useNavigation();


  const posts = useSelector(SelectPosts)
  const user = useSelector(SelectUser);
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');



  const handlePostTitle = (text) => {
    setTitle(text);
  }

  const handlePostContent = (text) => {

    setContent(text);
  }


  const handlePostButton = () => {

    if (content && title) {
      dispatch(addPost({
        id: nanoid,
        user: user,
        title: title,
        content: content,
      }))
    }
    navigation.navigate('Home');

  }


  return (
    <View>

      <View>
        <Text>adding a new Post</Text>
      </View>
      <View>
        <Text>Post Title</Text>
        <TextInput
          placeholder="Post Title"
          onChangeText={handlePostTitle}
        />
      </View>

      <View>
        <Text>Content</Text>
        <TextInput
          placeholder="Post Content"
          onChangeText={handlePostContent}
        />
      </View>



      <Button title={'Post'} onPress={handlePostButton} />






    </View>
  )
}

export default CreatePost

const styles = StyleSheet.create({})