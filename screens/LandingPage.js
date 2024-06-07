import { View, Text,Image,StyleSheet, TouchableOpacity, } from 'react-native'
import React from 'react'
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize
  } from "react-native-responsive-dimensions";
  import LottieView from 'lottie-react-native';
  import { useNavigation } from '@react-navigation/native';

const LandingPage = ()=> {
  const navigation = useNavigation();
  return (
    <View style={{
    flex:1,
    backgroundColor: "#ffff"
    }}>
        <View style={{
           alignSelf:"center",
           height:responsiveHeight(30),
           width:responsiveWidth(80),
           justifyContent:'center',
           top:responsiveFontSize(4),
           //backgroundColor:'green'
        
         
      
        }}>
          <Image style={{
           alignSelf:'center',
 //backgroundColor:'red',
          alignItems:'center',
          justifyContent:'center',
          top:responsiveHeight(-6)
          
           


          }} 
          source={require("../assets/images/logo-image.png")} resizeMode="cover"/>
          <Text style={style.reelit}>Reel It Commerce</Text>
        </View>

        <View style={style.AnimationContainer}>
        <LottieView style={{height:"100%",width:"100%"}} 
        source={require("../assets/animations/cart.json")} 
         autoPlay>
        </LottieView>
      </View>
      
      
      <View style={style.ButtonContainer}>
        
        <TouchableOpacity style={style.button} onPress={()=> navigation.navigate('screen3')}>
            <Text style={style.getstarted}>Get Started</Text>
        </TouchableOpacity>

      </View>
    </View>
    
  )
};

export default LandingPage;

 const style=StyleSheet.create({


AnimationContainer:{
  
  width:responsiveWidth(90),
  height:responsiveHeight(60),
  alignSelf:'center',
  top:responsiveHeight(-8),
  //backgroundColor:'red'
    
     
},

reelit:{
  color:"black",
  fontSize:responsiveFontSize(2.5),
  fontSize:responsiveFontSize(3),  
  alignSelf:'center',
  alignItems:'center',
  justifyContent:'center',
  top:responsiveHeight(-8)
 
    

},


ButtonContainer:{
  height:responsiveHeight(8),
  width:responsiveWidth(90),
  // backgroundColor:"red",
 
 top:responsiveHeight(-3),
  alignItems:"center",
  justifyContent:"center",
  alignSelf:"center"
},
button:{
  height:responsiveHeight(8),
  width:responsiveWidth(90),
  backgroundColor:"#9c2bb3",
  borderRadius:responsiveHeight(2.5)
  
},
getstarted:{
  color:"#ffff",
  alignSelf:"center",
  top:responsiveHeight(2.5),
  fontSize:responsiveFontSize(2.5),
 fontWeight:'bold'



}
 })