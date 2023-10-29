import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView, Pressable, Image } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { useNavigation } from '@react-navigation/native';
import { RadioButton } from 'react-native-paper';
import { launchImageLibrary } from 'react-native-image-picker';
import { SelectAllCars } from '../../redux/auth/Cars/carsSlice';
import DropDownPicker from 'react-native-dropdown-picker';
import { addPost } from '../../redux/posts/postsSlice';
import { SelectUser } from '../../redux/auth/authSlice';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const CreatePost = () => {
  const navigation = useNavigation();
  const cars = useSelector(SelectAllCars);
  const user = useSelector(SelectUser);
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [selectedValue, setSelectedValue] = useState('Car');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState(null);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);

  const RadioButtonsValues = ['Car', 'House', 'Phone', 'Pc'];

  const handleRadioChange = (value) => {
    setSelectedValue(value);
  };

  const imagePicker = () => {
    let options = {
      mediaType: 'photo',
    };

    launchImageLibrary(options, (response) => {
      if (!response.didCancel) {
        setImage(response.assets[0]?.uri || null);
      }
    });
  };

  const handlePostButton = () => {
    if (content && title && price && selectedValue && image) {
      if (selectedValue === 'Car') {
        dispatch(
          addPost({
            id: nanoid(),
            user: user,
            title: title,
            content: content,
            date: new Date(),
            category: selectedValue,
            brand: value,
            price: price,
            image: image,
          })
        );
      } else {
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
      }

      navigation.navigate('Home');
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
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
          <Text style={styles.inputLabel}>Category</Text>
          <ScrollView horizontal={true} contentContainerStyle={styles.radioButtonsContainer}>
            {RadioButtonsValues.map((category) => (
              <View key={category} style={styles.radioButton}>
                <View style={selectedValue === category ? styles.selectedCard : styles.card}>
                  <RadioButton
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
        {selectedValue === 'Car' ? (
          <DropDownPicker
            open={open}
            value={value}
            items={cars.map((car) => ({
              label: car.name,
              value: car.name,
            }))}
            setOpen={setOpen}
            setValue={setValue}
            style={styles.dropDownPicker}
          />
        ) : null}
        <Pressable onPress={imagePicker} style={styles.imagePicker}>
          <MaterialIcons name="photo-library" size={30} color="#FFFFFF" />
          <Text style={styles.imagePickerText}>Insert an Image</Text>
        </Pressable>
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Price</Text>
          <TextInput
            style={styles.input}
            placeholder="Price"
            onChangeText={setPrice}
            keyboardType="numeric"
          />
        </View>
        <View style={styles.buttonContainer}>
          <Pressable style={styles.postButton} onPress={handlePostButton}>
            <Text style={styles.buttonText}>Post</Text>
          </Pressable>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
    paddingBottom : 10,

  },
  scrollContent: {
    paddingHorizontal: 16,
  },
  heading: {
    fontSize: 28,
    marginTop: 20,
    color: 'black',
    marginBottom: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    fontFamily: 'your-custom-font',
  },
  inputContainer: {
    marginTop: 20,
  },
  inputLabel: {
    marginBottom: 10,
    color: '#333',
    fontSize: 20,
  },
  input: {
    height: 50,
    width: '100%',
    marginVertical: 10,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#ccc',
    backgroundColor: '#FFFFFF',
    fontSize: 16,
  },
  RadioContainer: {
    marginTop: 30,
  },
  radioButtonsContainer: {
    marginBottom: 20,
  },
  radioButton: {
    marginRight: 20,
  },
  selectedCard: {
    marginLeft: 10,
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#0054a6',
    borderWidth: 1,
  },
  card: {
    marginLeft: 10,
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#007BFF',
    borderWidth: 1,
  },
  cardText: {
    color: '#333',
    marginTop: 10,
    fontSize: 16,
  },
  imagePicker: {
    marginTop: 20,
    marginLeft: 10,
    height: 60,
    backgroundColor: 'black',
    width: 200,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  imagePickerText: {
    color: '#FFFFFF',
    fontSize: 20,
    marginLeft: 10,
  },
  dropDownPicker: {
    marginTop: 20,
  },
  buttonContainer: {
    marginTop: 50,
    alignItems: 'center',
  },
  postButton: {
    borderRadius: 20,
    backgroundColor: 'black',
    width: 280,
    height: 70,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 24,
    textAlign: 'center',
  },
});

export default CreatePost;
