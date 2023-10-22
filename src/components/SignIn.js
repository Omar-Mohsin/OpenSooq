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
      <View style={styles.welcoming}>
        <Text style={styles.welcomingText}>Welcome Back!</Text>
      </View>
      <View style={styles.formContainer}>
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
        <Pressable style={styles.SignInButton} onPress={handleSignIn}>
          <Text style={styles.signInText}>Sign in</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1,
    height: '100%',
  },

  welcoming: {

    paddingTop: 200,
    flex: 1,
    flexDirection : 'row',
    justifyContent: 'flex-start',
      marginLeft : 24,
    alignItems: 'center'
  },
  welcomingText: {
    marginBottom: 30,
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 20,
    color: 'black',

  },

  formContainer: {
    flex: 1,
    padding: 20,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 200,

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
  SignInButton: {
    marginTop: 50,
    borderRadius: 15,
    backgroundColor: 'black',
    width: 250,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  signInText: {
    fontSize: 24,
    color: 'white'
  },
});

export default SignIn;
