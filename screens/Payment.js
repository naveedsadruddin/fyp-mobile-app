import React, { useState } from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { View, Text, Image, StyleSheet,ScrollView, TouchableOpacity, ScrollViewBase, TextInput} from 'react-native';
import {
  responsiveHeight,
  responsiveFontSize,
  responsiveWidth,
  responsiveScreenFontSize,
  
} from 'react-native-responsive-dimensions';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';

function Payment() {
    const [isAddress, setIsAddress]=useState(false);
    
    const toggleAddress=()=>{
        setIsAddress(!isAddress)
    }

  const cart = useSelector(state => state.cart);
  const token = useSelector(state => state.user.userData.token);
  const navigation = useNavigation();

  const config = {
    headers: {
        'Authorization': `Bearer ${token}`
    }
  }
  console.log(config)
  const handlePlaceOrder = () => {
    axios.post(`http://13.49.252.90/api/users/orders`, cart , config)
    .then((response) => {
      console.log(response.data.message)
      navigation.navigate("screen16")
    })
    .catch((error) => {
      console.error('Error placing order:', error);
    });
  }
  return (
    <>
    <ScrollView contentContainerStyle={{flex:1, gap:16}}>
        <View style={style.bar}>
            <TouchableOpacity onPress={() => navigation.navigate("screen9")}><Ionicons name='arrow-back-outline' size={25} color='black' style={{right:60}}/></TouchableOpacity>
            <Text style={style.barText}>Payment and Address</Text>
        </View>
        <View style={style.addressparent}>
            <View style={style.addressDropdown}>
                <Text style={style.address}>Address</Text>
               <TouchableOpacity onPress={toggleAddress}><AntDesign name='pluscircle' size={30} color='#9c2bb3'/></TouchableOpacity>
                
            </View>
            {isAddress? <TextInput style={style.addresInput}/>:null }
        </View>
            <Text style={style.paymenttxt}>Payment Method</Text>
        <View style={style.addressparent}>
            <View style={style.addressDropdown}>
                <Text style={style.address}>Cash on Delivery</Text>
                <AntDesign name='checkcircle' size={30} color='#9c2bb3'/>
            </View>
        </View>

   </ScrollView>
    <View style={style.lowerContainer}>
    
    <View style={style.totalPrice}>
      <Text style={{fontSize:18,fontWeight:"500",color:"black"}}>Total Price</Text>
      <Text style={{fontSize:18,fontWeight:"bold",color:"black"}}>Rs {cart.totalAmount}</Text>
    </View>
    <TouchableOpacity style={style.orderButton} onPress={handlePlaceOrder}>
      <Text style={{alignSelf:'center',color:"white",fontSize:19,fontWeight:"700"}}>Order Now</Text>
    </TouchableOpacity>
  </View>
</>
  )
};
const style=StyleSheet.create({
bar:{
    width:responsiveWidth(100),
    height:responsiveHeight(10),
    backgroundColor:"transparent",
    alignItems:"center",
    justifyContent:"center",
    flexDirection:"row",
   
    
    // top:responsiveHeight(1)

},

barText:{
    fontSize:22,
    fontWeight:"bold",
    color:"black"


},
addressparent:{
  width:responsiveWidth(90),
  alignSelf:"center",
  gap:17,
  backgroundColor: 'white',
  paddingHorizontal:35,
  borderRadius: 16,
  paddingVertical:24,
  shadowColor: '#5C61F4',
  shadowOffset: {
    width: 0,
    height: 3,
  },
  shadowOpacity: 0.1,
  shadowRadius: 30,
  elevation: 8,

  },
addressDropdown:{
    width:responsiveWidth(100),
    alignSelf:"center",
    height:responsiveHeight(7),
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"space-between",
    paddingHorizontal:45,
   
},
address:{
    fontSize:24,
    fontWeight:"500", 
    color:"black"

},
addresInput:{
  width:responsiveWidth(80),
  borderWidth:1,
  borderColor:"gray",
  height:responsiveHeight(15),
  alignSelf:"center",
  borderRadius:13,

},
paymenttxt:{
 fontSize:21,
 fontWeight:"600",
 color:"black",
left:32
},
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
    bottom:responsiveHeight(5),
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

export default Payment
