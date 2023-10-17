import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import { SelectUser } from '../../redux/auth/authSlice'
import NavigationButtons from './NavigationButtons'
const Profile = () => {

    const user = useSelector(SelectUser);
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image
                    source={{
                        uri: 'https://robohash.org/1?set=set2',
                    }}
                    style={styles.profileImage}
                />
                <Text style={styles.welcoming}>Welcome, {user.name}</Text>
            </View>
            <NavigationButtons />

        </View>
    )
}

export default Profile

const styles = StyleSheet.create({

    container: {
        backgroundColor: '#FAF1E4',
        height: '100%',
    },
    header: {
        alignItems: 'center',
    },
    welcoming: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 16,
    },
    profileImage: {
        marginTop : 30,
        width: 120,
        height: 120,
        borderRadius: 60,
    },
})