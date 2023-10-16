import { StyleSheet, Text, View  , TextInput , Pressable} from 'react-native'
import { useState } from 'react'
import React from 'react'
import { useSelector , useDispatch } from 'react-redux'
import { login } from '../../redux/auth/authSlice'


const SignIn = () => {



  const [email , setEmail] = useState('');
  const [password , setPassword]  = useState('');

  const dispatch = useDispatch();

  const handleEmail =(text) =>{

    setEmail(text);

  }

  const handlepassword =(text)=>{
      setPassword(text)
  }


  const handleSignIn = ()=>{
    dispatch(login({email , password}))
  }

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
        onChangeText={handlepassword}
      />
      <Pressable style={styles.button} onPress={handleSignIn}>
        <Text style={styles.signInText}>Sign in</Text>
      </Pressable>
    </View>
  </View>
  )
}

export default SignIn

const styles = StyleSheet.create({

  container: {
    backgroundColor: '#9EB384',
    padding: 20,
    height: '100%',
    width: '100%',
    
 
  },
  formContainer: {
    flex: 1,
    justifyContent : 'center',
    marginTop : 70,
    marginBottom : 70,
    backgroundColor: '#FAF1E4',
    padding: 20,
    borderRadius: 20,
    height: 100,
    width: '100%',
    alignItems: 'center',
  },
  title: {
    marginTop : 40,
    alignItems : 'center',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 100,
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
    marginTop: 50,
    borderRadius: 15,
    backgroundColor: '#435334',
    width: 150,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    color: 'black',
  },
  signInText: {
    fontSize: 20,
    color: 'white',
  },

  
})