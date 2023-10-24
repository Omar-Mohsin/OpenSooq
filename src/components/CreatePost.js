import { StyleSheet, Text, View, TextInput, ScrollView, Pressable } from 'react-native';
import { useState } from 'react';
import { SelectUser } from '../../redux/auth/authSlice';
import { useDispatch, useSelector } from 'react-redux';
import { addPost } from '../../redux/posts/postsSlice';
import { nanoid } from '@reduxjs/toolkit';
import { SelectPosts } from '../../redux/posts/postsSlice';
import { useNavigation } from '@react-navigation/native';
import { RadioButton } from 'react-native-paper';
import { launchImageLibrary } from 'react-native-image-picker';

const CreatePost = () => {
  const navigation = useNavigation();
  const posts = useSelector(SelectPosts);
  const user = useSelector(SelectUser);
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [selectedValue, setSelectedValue] = useState('Car');
  const [price, setPrice] = useState()
  const [image, setImage] = useState('');
  const RedioButtonsValues = [
    'Car',
    'House',
    'Phone',
    'Pc'
  ];

  const handleRadioChange = (value) => {
    setSelectedValue(value);
  };

  const imagePicker = () => {

    let options = {
      strongOption: {
        path: 'photo',
      }
    }

    launchImageLibrary(options, response => {
      if (!response.didCancel) {
        setImage(response.assets[0]?.uri || ''); // Set the image URI

      }
    });


  }
  const handlePostButton = () => {
    if (content && title && price && selectedValue && image) {
      dispatch(
        addPost({
          id: nanoid(),
          user: user,
          title: title,
          content: content,
          date: new Date(),
          category: selectedValue,
          price: price,
          image: image,
        })
      );
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

        <Pressable onPress={() => { imagePicker() }} style={styles.ImagePicker}>
          <Text style={styles.ImagePickerText}>Insert an Image</Text>
        </Pressable>
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
        <View style={styles.ButtonContainer}>
          <Pressable style={styles.postButton} onPress={handlePostButton}>
            <Text style={styles.buttonText}>Post</Text>
          </Pressable>

        </View>
      </ScrollView>


    </View>
  );
};

export default CreatePost;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEEE',
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
    marginLeft: 5,
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
    marginLeft: 10
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


  ImagePicker: {
    flex: 1,
    marginTop: 20,
    marginLeft: 10,
    height: 50,
    backgroundColor: 'black',
    width: 150,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ImagePickerText: {
    color: 'white',
    fontSize: 17
  },

  ButtonContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 60,
  },
  postButton: {
    flex: 1,
    marginTop: 50,
    borderRadius: 15,
    backgroundColor: 'black',
    width: 250,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
  },
});