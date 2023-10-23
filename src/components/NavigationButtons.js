import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { logout } from '../../redux/auth/authSlice';

const NavigationButtons = () => {
    const dispatch = useDispatch();
    const navigation = useNavigation();

    const NavigateToCreatePost = () => {
        navigation.navigate('createPost');
    };

    const NavigateToHome = () => {
        navigation.navigate('Home');
    };


    const handleSignOut = () => {
        dispatch(logout())
    }
    return (
        <View style={styles.buttonContainer}>
            <Pressable style={styles.button} onPress={NavigateToCreatePost}>
                <Text style={styles.ButtonText}>Home</Text>
            </Pressable>

            <Pressable style={styles.button} onPress={NavigateToHome}>
                <Text style={styles.ButtonText}>Create Post</Text>
            </Pressable>

            <Pressable style={styles.LogoutButton} onPress={handleSignOut}>
                <Text style={styles.ButtonText}>Logout</Text>
            </Pressable>
        </View>
    )
}

export default NavigationButtons

const styles = StyleSheet.create({


    profileImage: {
        width: 120,
        height: 120,
        borderRadius: 60,
    },
    welcomeText: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 16,
    },
    buttonContainer: {
        marginTop: 90,
        marginBottom: 30,

        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        marginTop: 30,
        marginButton: 10,
        backgroundColor: 'black',
        borderRadius: 15,
        height: 40,
        width: 200,
    
        alignItems: 'center',
    },
    ButtonText: {
        fontSize: 20,
        marginTop: 5,
        color: 'white',
    },

    LogoutButton: {
        marginTop: 70,
        marginButton: 10,
        backgroundColor: 'red',
        borderRadius: 15,
        height: 40,
        width: 200,
        alignItems: 'center',
    },

})