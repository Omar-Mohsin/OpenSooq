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
        <ScrollView style={{backgroundColor : 'white'}}>
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
    );
};

const styles = StyleSheet.create({
    carContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10,
    },
    carImage: {
        width: 100,
        height: 100,
        marginRight: 10,
    },
    carName: {
        fontSize: 18,
    },
});

export default CarDetail;
