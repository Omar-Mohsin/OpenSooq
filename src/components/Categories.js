import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import axios from 'axios';

const CarDetail = () => {
    const [cars, setCars] = useState([]);

    useEffect(() => {
        axios.get('https://raw.githubusercontent.com/filippofilip95/car-logos-dataset/master/logos/data.json')
            .then((response) => {
                setCars(response.data.slice(0, 100));
            })
            .catch((error) => {
                console.error('Error fetching car data:', error);
            });
    }, []);

    return (
        <View style={styles.container}>
            <ScrollView style={styles.scrollView}>
                {cars.map((car, index) => (
                    <View style={styles.carContainer} key={index}>
                        <Image
                            source={{ uri: car.image.source }}
                            style={styles.carImage}
                        />
                        <Text style={styles.carName}>{car.name}</Text>
                    </View>
                ))}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#f7f7f7',
    },
    scrollView: {
        flex: 1, // Make the ScrollView take up all available space
    },
    carContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        backgroundColor: '#fff',
        marginBottom: 10,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 2,
    },
    carImage: {
        width: 120,
        height: 80,
        marginRight: 15,
        borderRadius: 5,
    },
    carName: {
        fontSize: 18,
        flex: 1,
        color: '#333',
    },
});

export default CarDetail;
