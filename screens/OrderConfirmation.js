
import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

import {
    responsiveHeight,
    responsiveFontSize,
    responsiveWidth,
    responsiveScreenFontSize,
    
  } from 'react-native-responsive-dimensions';
  import LottieView from 'lottie-react-native';
  import {useNavigation} from '@react-navigation/native';
 export default function OrderConfirmationScreen() {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <View style={styles.AnimationContainer}>
           <LottieView style={{height:"100%",width:"100%"}} 
        
        source={require("../assets/animations/thankyou.json")} 
         autoPlay>
        </LottieView>
        </View>
        <View style={styles.completeordertxt}>
        
            <Text style={styles.title}>Your Order has been accepted</Text>
            <Text style={styles.subtitle}>Your items has been placed and is on its way to being processed</Text>
            <TouchableOpacity onPress={() => navigation.navigate('screen6')} style={styles.backhomebutton}>
                <Text style={styles.backbtnText}>Back to home</Text>
            </TouchableOpacity>
            {/* <TouchableOpacity onPress={() => navigation.navigate('screen6')}>
                <Text style={styles.backToHome}>Back to home</Text>
            </TouchableOpacity>  */}
        </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: '#f0f4f8',
        
    
    },
    AnimationContainer:{
        // backgroundColor:"red",
         width:responsiveWidth(90),
         alignSelf:'center',
         height:responsiveHeight(20),
         top:responsiveHeight(12)
        },
        completeordertxt:{
            // backgroundColor:"red",
            top:responsiveHeight(15),
            alignItems:"center",
            justifyContent:"center",
            width:responsiveWidth(90),
            alignSelf:"center"
        },
    title: {
        fontSize: 26,
        fontWeight:"bold",
        textAlign: 'center',
        color:"black",
       

    },
    subtitle: {
        fontSize: 16,
        fontWeight:"700",
        textAlign: 'center',
        top:responsiveHeight(1)
     
        
    },
    backhomebutton: {
        backgroundColor: '#9c2bb3',
       
       top:responsiveHeight(4),
       
        width:responsiveWidth(90),
        height:responsiveHeight(7),
        alignItems:"center",
        justifyContent:"center",
        borderRadius: 16,
    },
    backbtnText: {
        color: '#fff',
        fontSize: 18,
        fontWeight:"bold",
   
        
    },
   
});


