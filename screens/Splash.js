
import React from 'react'
import { View, Text, Image,StyleSheet,TouchableOpacity } from 'react-native'
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize
} from "react-native-responsive-dimensions";
import LottieView from 'lottie-react-native';
 import { useNavigation } from '@react-navigation/native';
function Splash() {
    const navigation=useNavigation();
  return (
   <View style={{
        flex:1,
        backgroundColor:"#ffff"
        }}>
     
     
     <LottieView style={{height:"100%",width:"100%"}} 
        
        source={require("../assets/animations/SPLASH_SCREEN.json")} 
         autoPlay
         loop={false}
         onAnimationFinish={()=>
         navigation.navigate("screen2")
         }>

        </LottieView>

    </View>

  );
};


export default Splash