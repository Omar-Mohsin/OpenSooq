import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import axios from 'axios';
import { Image } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';

const CarDetail = () => {
    const [cars, setCars] = useState([]); // Use an empty array as the initial state.

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
        <View>
            {cars.map((car, index) => (
                <ScrollView key={index}>
                <Text >{car.name}</Text>
                <Image
                source={{uri : car.image.source[index]}}
                ></Image>
                </ScrollView>
            ))}
        </View>
    );
};

export default CarDetail;

const styles = StyleSheet.create({});
