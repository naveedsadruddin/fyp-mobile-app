// src/OrderConfirmationScreen.js

import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const OrderConfirmationScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Image source={require('../assets/checkmark.png')} style={styles.image} />
            <Text style={styles.title}>Your Order has been accepted</Text>
            <Text style={styles.subtitle}>Your items has been placed and is on its way to being processed</Text>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('TrackOrder')}>
                <Text style={styles.buttonText}>Track Order</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                <Text style={styles.backToHome}>Back to home</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f4f8',
        padding: 20,
    },
    image: {
        width: 100,
        height: 100,
        marginBottom: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 16,
        textAlign: 'center',
        color: '#6c757d',
        marginBottom: 40,
    },
    button: {
        backgroundColor: '#28a745',
        paddingVertical: 15,
        paddingHorizontal: 40,
        borderRadius: 25,
        marginBottom: 20,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
    },
    backToHome: {
        color: '#007bff',
        fontSize: 16,
    },
});

export default OrderConfirmationScreen;
