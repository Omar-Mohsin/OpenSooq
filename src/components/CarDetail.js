import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { fetchCars } from '../../redux/auth/Cars/carsSlice';
import { useSelector, useDispatch } from 'react-redux';
import { SelectAllCars } from '../../redux/auth/Cars/carsSlice';

const CarDetail = () => {
    const cars = useSelector(SelectAllCars);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCars());
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
        backgroundColor: 'white',
    },
    scrollView: {
        flex: 1,
    },
    carContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 25,
        backgroundColor: '#fff',
        marginBottom: 34,
        borderRadius: 10,
        borderBottomWidth: 0.5, 
        borderBottomColor: 'gray',  
       },
    carImage: {
        width: 120,
        height: 105,
        marginRight: 40,
        padding: 30,
    },
    carName: {
        fontSize: 18,
        flex: 1,
        color: '#333',
    },
});

export default CarDetail;
