import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { useState } from 'react';
import { SelectUser } from '../../redux/auth/authSlice';
import { useDispatch, useSelector } from 'react-redux';
import { addPost } from '../../redux/posts/postsSlice';
import { nanoid } from '@reduxjs/toolkit';
import { SelectPosts } from '../../redux/posts/postsSlice';
import { useNavigation } from '@react-navigation/native';
import { RadioButton } from 'react-native-paper';

const CreatePost = () => {
  const navigation = useNavigation();
  const posts = useSelector(SelectPosts);
  const user = useSelector(SelectUser);
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [selectedValue, setSelectedValue] = useState('Car');
  const [price, setPrice] = useState()

  const RedioButtonsValues = [
    'Car',
    'House',
    'Phone',
    'Pc'
  ];

  const handleRadioChange = (value) => {
    setSelectedValue(value);
  };

  const handlePostButton = () => {
    if (content && title && price && selectedValue) {
      dispatch(
        addPost({
          id: nanoid(),
          user: user,
          title: title,
          content: content,
          date: new Date(),
          category: selectedValue,
          price: price,
        })
      );
      setContent('');
      setTitle('');
      navigation.navigate('Home');
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView>
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

        <View style={styles.RadioContainer}>

          <Text style={styles.RadioText}>category</Text>
          <ScrollView horizontal={true} >
            {RedioButtonsValues.map((category) => (
              <View key={category} style={styles.radioButton}>
                <View style={styles.card}>
                  <RadioButton.Android
                    value={category}
                    status={selectedValue === category ? 'checked' : 'unchecked'}
                    onPress={() => handleRadioChange(category)}
                    color="#007BFF"
                  />
                  <Text style={styles.cardText}>{category}</Text>
                </View>
              </View>
            ))}
          </ScrollView>
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Price</Text>
          <TextInput
            style={styles.input}
            placeholder="Price"
            onChangeText={setPrice}
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


      </ScrollView>


    </View>
  );
};

export default CreatePost;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D2E0FB',
    paddingTop: 20,
  },
  heading: {
    fontSize: 24,
    marginTop: 40,
    color: 'black',
    marginBottom: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  inputContainer: {
    marginTop: 30,
    paddingHorizontal: 16,

  },
  inputLabel: {
    color: 'black',
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
    marginTop: 50,
    marginBottom: 50,

  },
  buttonText: {
    color: 'black',
    fontSize: 18,
    textAlign: 'center',
  },
  RadioContainer: {

    marginTop: 50,
  },
  radioButton: {
    marginRight: 20,
  },
  RadioText: {
    color: 'black',
    fontSize: 18,
    marginBottom: 20,
    marginLeft : 10
  },
  card: {
    marginLeft: 10,

    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#007BFF',
    borderWidth: 1,
  },
  cardText: {
    color: 'black',
    marginTop: 5,
  },
});