import React from 'react'
import { View, Text, Image, StyleSheet, TextInput,  ScrollView, TouchableOpacity } from 'react-native';
import {
  responsiveHeight,
  responsiveFontSize,
  responsiveWidth,
  responsiveScreenFontSize,
 
}from 'react-native-responsive-dimensions';
import LottieView from 'lottie-react-native';
function Error() {
  return (
    <View style={{flex: 1, backgroundColor:"#fff"}}>
        <View style={style.Animationcontainer}>
          <LottieView style={{height:"100%",width:"100%"}} 
          source={require("../assets/animations/Error Animation.json")} 
          autoPlay>
          </LottieView>
        </View>
       <View style={style.errortxt}>
        
        <Text style={{fontWeight:"bold", fontSize:20}}>Error!</Text>
        <Text style={{fontWeight:"500", fontSize:17}}>Something went wrong</Text>
        <Text style={{fontWeight:"500", fontSize:17}}>Please try again</Text>
        <TouchableOpacity style={style.button}>
          <Text style={{fontSize:17, fontWeight:"500",color:"white"}}>Try Again</Text>
        </TouchableOpacity>
       </View>
    </View>
    
  )
}

const style=StyleSheet.create({
Animationcontainer:{
// backgroundColor:"red",
height:responsiveHeight(50),
width:responsiveWidth(100),
alignSelf:"center",
top:responsiveHeight(12)

},

errortxt:{
  // backgroundColor:"red",
  height:responsiveHeight(15),
  width:responsiveWidth(90),
  alignSelf:"center",
  top:responsiveHeight(15),
  alignItems:"center"
  
 
},
button:{
  backgroundColor:"pink",
  width:responsiveWidth(25),
  height:responsiveHeight(4.5),
  alignItems:"center",
  justifyContent:"center",
 top:responsiveHeight(1.5),
 borderRadius:8

}
})

export default Error