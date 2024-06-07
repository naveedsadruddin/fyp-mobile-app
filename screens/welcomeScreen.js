import { useState } from 'react';
import { View, Text, Image,StyleSheet,TouchableOpacity } from 'react-native'
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize
} from "react-native-responsive-dimensions";
import LottieView from 'lottie-react-native'
import { useNavigation } from "@react-navigation/native";


const Welcome=()=>{

  const navigation=useNavigation();
  return(
    <View style={{
      flex:1,
      backgroundColor:"#ffff"
    }}>
    <View style={styles.Container}>
      <Text style={styles.Welcometext}>Welcome</Text>
      <Text style={styles.subheadingtext}>Please sign in or sign up to continue using our app</Text>     
    </View>
      <View style={styles.AnimationContainer}>
        <LottieView style={{height:"100%",width:"100%"}} 
        
        source={require("../assets/animations/homescreen.json")} 
         autoPlay>
        </LottieView>
      </View>
      <View style={{
      //  backgroundColor:'blue',
        height:responsiveHeight(25),
        width:responsiveWidth(90),
        flexDirection:"column",
        alignSelf:"center",
      top:responsiveHeight(10),
      justifyContent:'space-evenly',
    


      }}>
        <View style={styles.ButtonsContainer}>
          <TouchableOpacity style={styles.Button1} onPress={()=> navigation.navigate('screen5')}> 
            <Text style={styles.Buttion1Text}>Sign In</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.Button2} onPress={()=> navigation.navigate('screen4')}>
            <Text style={styles.Button2Text}>Sign Up</Text>
          </TouchableOpacity>
        </View>
        </View>
      </View>
  );
};

const styles = StyleSheet.create({
  Container:{
      // backgroundColor:'red',
       width:responsiveWidth(90),
       height:responsiveHeight(20),
       alignItems:'center',
       justifyContent:'center',
       alignSelf:'center',
       top:responsiveFontSize(5)

   },

   AnimationContainer:{
   // backgroundColor:"red",
    width:responsiveWidth(90),
    height:responsiveHeight(50),
    alignSelf:'center',
    top:responsiveHeight(7)

    
   },

   Welcometext:{
    fontSize:responsiveFontSize(4),
    fontWeight:'bold',
    color:'black',
    top:responsiveHeight(2),
    alignSelf:"center",
    alignItems:'center'
   },

   subheadingtext:{
    fontSize:responsiveFontSize(1.8),
    color:'lightgrey',
    top:responsiveHeight(3),
    fontWeight:'bold',
   
   
  

   },

   ButtonsContainer:{
   //backgroundColor:"red",
    width:responsiveWidth(90),
    height:responsiveHeight(20),
    alignSelf:'center',
    alignItems:'center',
    justifyContent:'center',
     top:responsiveHeight(3)
   },

  Button1:{
  height:responsiveHeight(7.5),
  width:responsiveWidth(90),
  borderRadius:responsiveHeight(2),
  justifyContent:'center',
  alignItems:"center",
 
  top:responsiveHeight(-7),
  backgroundColor:"#9c2bb3"
   },


  Buttion1Text:{
  fontSize:responsiveFontSize(2.5),
  fontWeight:'bold',
  alignItems:'center',
  color:"#fff"

    
   },
   Button2:{
    height:responsiveHeight(7.5),
    width:responsiveWidth(90),
    borderRadius:responsiveHeight(2),
    borderWidth:1,
    borderColor:"#9c2bb3",
    justifyContent:"center",
    alignItems:"center",
    top:responsiveHeight(-5),
   

   },
  Button2Text:{
  color:"#9c2bb3",
  fontSize:responsiveFontSize(2.5),
  fontWeight:"bold",
  alignSelf:"center",
   }

})

export default Welcome;
