import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Pressable } from 'react-native';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/auth/authSlice';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const handleEmail = (text) => {
    setEmail(text);
  };

  const handlePassword = (text) => {
    setPassword(text);
  };

  const handleSignIn = () => {
    dispatch(login({ email, password }));
  };

  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <Text style={styles.title}>Welcome Back!</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Email"
          keyboardType="email-address"
          onChangeText={handleEmail}
        />
        <TextInput
          style={styles.input}
          placeholder="Enter Password"
          secureTextEntry={true}
          onChangeText={handlePassword}
        />
        <Pressable style={styles.button} onPress={handleSignIn}>
          <Text style={styles.signInText}>Sign in</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#D2E0FB',
    padding: 20,
    justifyContent: 'center',
    height : '100%'
  },
  formContainer: {
    backgroundColor: '#8EACCD',
    padding: 20,
    borderRadius: 30,
    height  :  '70%',
    alignItems: 'center',

    justifyContent : 'center',
  },
  title: {
    
    marginBottom : 30,
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 20,
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
  button: {
    marginTop: 20,
    borderRadius: 15,
    backgroundColor: '#F9F3CC',
    width: 150,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  signInText: {
    fontSize: 20,
    color : 'black'
  },
});

export default SignIn;
