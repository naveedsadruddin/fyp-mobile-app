import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';

import video from 'react-native-video'
import { View, Text, Image, StyleSheet, TextInput, Video,ScrollView, TouchableOpacity, ScrollViewBase } from 'react-native';
import {
  responsiveHeight,
  responsiveFontSize,
  responsiveWidth,
  responsiveScreenFontSize,
  
} from 'react-native-responsive-dimensions';
function Reels() {
  const navigation = useNavigation();
  return (
   
    
        <View style={{
          position:'absolute',
          top:0,
          left:0,
          right:0,
          flexDirection:"row",
          justifyContent:"space-between",
          padding:10,
          zIndex:1
        }}>
          <Text style={{fontSize:25,fontWeight:"bold",color:"#ffff"}}>Reels</Text>
          <TouchableOpacity onPress={() => navigation.navigate("screen6")}><AntDesign name='back'style={{ fontSize:30, color:'white'}}/></TouchableOpacity> 
        </View>
   
   
  )
      }

export default Reels;