import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign'
import { View, Text, Image, StyleSheet, TextInput,TouchableOpacity,  ScrollView, Button } from 'react-native';
import {
  responsiveHeight,
  responsiveFontSize,
  responsiveWidth,
  responsiveScreenFontSize,
  
} from 'react-native-responsive-dimensions';
import Lowerbar from './Lowerbar';
// import Bar from './bar';

function User() {
  return (
  <View style={{height:responsiveHeight(100), backgroundColor:"#9c2bb3",}}> 
      <View style={style.container}>

        <View style={style.circle}>
          <AntDesign name='user' size={60} color='black'/> 
        </View>

        <View style={style.text}>
          <Text style={{fontSize:25,fontWeight:500,color:"black"}}>Shilpa Kingrani</Text>
          <Text style={{fontSize:18,fontWeight:400,color:"gray"}}>03312026865</Text>
        </View>

        <View style={style.boxcontainer}>
          <View style={style.box}>
            <Text style={{fontSize:18,fontWeight:"600",color:"blue"}}>29</Text>
            <Text style={{fontWeight:400,fontSize:19,color:"gray"}}>Wish list</Text>
          </View>
          <View style={style.box}>
            <Text style={{fontSize:18,fontWeight:"600",color:"blue"}}>1</Text>
            <Text style={{fontWeight:400,fontSize:19,color:"gray"}}>Total Orders</Text>
          </View>
      </View>
           
        <Text style={{fontSize:26,fontWeight:"600",padding:15,color:"black"}}>Recent Orders</Text>
        
          <ScrollView style={{flex:1}} contentContainerStyle={style.recentOrders}>

            <View style={style.order}>
              <View style={style.left}>
                <Image source={require("../assets/images/image-Product.jpg")}style={{  width: "100%",height:"100%",borderRadius:8}}/>
              </View>
              <View style={style.right}>
                <Text style={{color:"blue",fontWeight:"600",fontSize:18}}>price. $299,43</Text>
                <Text style={{fontWeight:"500",fontSize:15,color:"black"}}>Nike Air Max 270 React ENG</Text>
              </View>  
            </View>

            <View style={style.order}>
              <View style={style.left}>
                <Image source={require("../assets/images/image-Product.jpg")}style={{  width: "100%",height:"100%",borderRadius:8}}/>
              </View>
              <View style={style.right}>
                <Text style={{color:"blue",fontWeight:"600",fontSize:18}}>price. $299,43</Text>
                <Text style={{fontWeight:"500",fontSize:15,color:"black"}}>Nike Air Max 270 React ENG</Text>
              </View>  
            </View>

            <View style={style.order}>
              <View style={style.left}>
                <Image source={require("../assets/images/image-Product.jpg")}style={{  width: "100%",height:"100%",borderRadius:8}}/>
              </View>
              <View style={style.right}>
                <Text style={{color:"blue",fontWeight:"600",fontSize:18}}>price. $299,43</Text>
                <Text style={{fontWeight:"500",fontSize:15,color:"black"}}>Nike Air Max 270 React ENG</Text>
              </View>  
            </View>

            <View style={style.order}>
              <View style={style.left}>
                <Image source={require("../assets/images/image-Product.jpg")}style={{  width: "100%",height:"100%",borderRadius:8}}/>
              </View>
              <View style={style.right}>
                <Text style={{color:"blue",fontWeight:"600",fontSize:18}}>price. $299,43</Text>
                <Text style={{fontWeight:"500",fontSize:15,color:"black"}}>Nike Air Max 270 React ENG</Text>
              </View>  
            </View>

            <View style={style.order}>
              <View style={style.left}>
                <Image source={require("../assets/images/image-Product.jpg")}style={{  width: "100%",height:"100%",borderRadius:8}}/>
              </View>
              <View style={style.right}>
                <Text style={{color:"blue",fontWeight:"600",fontSize:18}}>price. $299,43</Text>
                <Text style={{fontWeight:"500",fontSize:15,color:"black"}}>Nike Air Max 270 React ENG</Text>
              </View>  
            </View>

            <View style={style.order}>
              <View style={style.left}>
                <Image source={require("../assets/images/image-Product.jpg")}style={{  width: "100%",height:"100%",borderRadius:8}}/>
              </View>
              <View style={style.right}>
                <Text style={{color:"blue",fontWeight:"600",fontSize:18}}>price. $299,43</Text>
                <Text style={{fontWeight:"500",fontSize:15,color:"black"}}>Nike Air Max 270 React ENG</Text>
              </View>  
            </View>

            <View style={style.order}>
              <View style={style.left}>
                <Image source={require("../assets/images/image-Product.jpg")}style={{  width: "100%",height:"100%",borderRadius:8}}/>
              </View>
              <View style={style.right}>
                <Text style={{color:"blue",fontWeight:"600",fontSize:18}}>price. $299,43</Text>
                <Text style={{fontWeight:"500",fontSize:15,color:"black"}}>Nike Air Max 270 React ENG</Text>
              </View>  
            </View>

            <View style={style.order}>
              <View style={style.left}>
                <Image source={require("../assets/images/image-Product.jpg")}style={{  width: "100%",height:"100%",borderRadius:8}}/>
              </View>
              <View style={style.right}>
                <Text style={{color:"blue",fontWeight:"600",fontSize:18}}>price. $299,43</Text>
                <Text style={{fontWeight:"500",fontSize:15,color:"black"}}>Nike Air Max 270 React ENG</Text>
              </View>  
            </View>

            <View style={style.order}>
              <View style={style.left}>
                <Image source={require("../assets/images/image-Product.jpg")}style={{  width: "100%",height:"100%",borderRadius:8}}/>
              </View>
              <View style={style.right}>
                <Text style={{color:"blue",fontWeight:"600",fontSize:18}}>price. $299,43</Text>
                <Text style={{fontWeight:"500",fontSize:15,color:"black"}}>Nike Air Max 270 React ENG</Text>
              </View>  
            </View>
          </ScrollView>
          <View style={{flex:1}}></View>
      </View>
      <Lowerbar/>
  </View>
    
  )
};


const style = StyleSheet.create({
    container:{
      backgroundColor:"white",
      width:responsiveWidth(100),
      height: responsiveHeight(100),
      alignSelf:"center",
      top:responsiveHeight(10),
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30
},

circle:{
  width:responsiveHeight(15),
  height:responsiveHeight(15),
  backgroundColor:"#a9a9a9",
  borderRadius:100,
  alignSelf:"center",
  bottom:responsiveHeight(8),
  borderColor:"white",
  borderWidth:4,
  alignItems:"center",
  justifyContent:"center"  
},
    text:{ 
    alignSelf:"center",
    // backgroundColor:"red",
    width:responsiveWidth(70),
    height:responsiveHeight(10),
    bottom:responsiveHeight(5),
    alignItems:"center",
    justifyContent:"space-evenly"

    },
    boxcontainer:{
    // backgroundColor:"red",
    height:responsiveHeight(13),
    width:responsiveWidth(90),
    alignSelf:"center",
    bottom:responsiveHeight(3),
    flexDirection:"row",
    justifyContent:"space-around",
    alignItems:"center"
    },
  box:{
    backgroundColor:"white",
    height:responsiveHeight(10),
    width:responsiveWidth(40),
    shadowColor: '#gray',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3,
    elevation:7,
    borderRadius:16,
    alignItems:"center",
    justifyContent:"center"
    },
  recentOrders:{
  width:responsiveWidth(90),
  // height:responsiveHeight(100),
  alignSelf:"center",
  gap: 10,

  },
  order:{
    width:responsiveWidth(85),
    height:responsiveHeight(14),
    // backgroundColor:"green",
    alignSelf:"center",
    bottom:responsiveHeight(1),
    justifyContent:"space-around",
    flexDirection:"row",
    shadowOpacity: 0.25,
    shadowRadius: 3,
    elevation:7,
    borderRadius:16,
    backgroundColor:"white"
   
  },
  left:{
    // backgroundColor:"blue",
    height:responsiveHeight(12),
    width:responsiveWidth(42),
    alignSelf:"center",
    alignItems:"center",
    justifyContent:"center"
  },
  right:{
    // backgroundColor:"pink",
    height:responsiveHeight(12),
    width:responsiveWidth(35),
    alignSelf:"center",
    justifyContent:"space-around"
  },
})

export default User
