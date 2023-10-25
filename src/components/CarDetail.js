import { StyleSheet, Text, View, Image, ScrollView, Pressable } from 'react-native';
import { useSelector } from 'react-redux';
import { SelectAllCars } from '../../redux/auth/Cars/carsSlice';
import { useNavigation } from '@react-navigation/native';
const CarDetail = () => {
    const cars = useSelector(SelectAllCars);
    const navigation = useNavigation();

 
    return (
        <View style={styles.container}>
            <ScrollView style={styles.scrollView}>
                {cars.map((car, index) => (
                    <Pressable style={styles.carContainer} key={index} onPress={()=>{navigation.navigate('CarCategoriesFilter' ,{carName : car.name})}}>
                        <Image
                            source={{ uri: car.image.source }}
                            style={styles.carImage}
                            resizeMode="contain"
                        />
                        <Text style={styles.carName}>{car.name}</Text>
                    </Pressable>
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
        width: 90,
        height: 90,
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
