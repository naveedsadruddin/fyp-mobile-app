import React from 'react'
import { View, Text, Image, StyleSheet, TextInput,TouchableOpacity,  ScrollView, Button } from 'react-native';
import {
  responsiveHeight,
  responsiveFontSize,
  responsiveWidth,
  responsiveScreenFontSize,
  
} from 'react-native-responsive-dimensions';
import { useNavigation } from '@react-navigation/native';
function Cartcomponent() {
  return (
    <View style={style.lowerContainer}>
    {/* <View style={style.horizontalLine}/> */}
    <View style={style.totalPrice}>
      <Text style={{fontSize:18,fontWeight:"500",color:"black"}}>Total Price</Text>
      <Text style={{fontSize:18,fontWeight:"bold",color:"black"}}>$300</Text>
    </View>
    <TouchableOpacity style={style.orderButton}>
      <Text style={{alignSelf:'center',color:"white",fontSize:19,fontWeight:"700"}}>Order Now</Text>
    </TouchableOpacity>
  </View>
  )
};
const style=StyleSheet.create({
    lowerContainer:{
    
      position:"absolute",
      bottom:0,
      alignSelf:"center",
        gap:32,
        backgroundColor: 'white',
        paddingHorizontal:35,
        borderRadius: 16,
        paddingVertical:24,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowOpacity: 0.1,
        shadowRadius: 30,
        elevation: 8,
      },
      
      totalPrice:{
        flexDirection:'row',
        justifyContent: 'space-between'
      },
      
     
      orderButton:{
        width: responsiveWidth(80),
        height: responsiveHeight(7),
        backgroundColor:'#9c2bb3',
        borderRadius: 16,
        alignSelf: 'center',
        justifyContent: 'center',
      }
})

export default Cartcomponent