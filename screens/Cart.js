import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { View, Text, Image, StyleSheet, TextInput,TouchableOpacity,  ScrollView, Button } from 'react-native';
import {
  responsiveHeight,
  responsiveFontSize,
  responsiveWidth,
  responsiveScreenFontSize,
  
} from 'react-native-responsive-dimensions';
import { useNavigation } from '@react-navigation/native';
import Lowerbar from './Lowerbar';

const Cart = () => {
  const navigation = useNavigation();

  return(
    <View style={{flex:1}}>
      <View style={style.cartBar}>
        <TouchableOpacity style={style.buttonBox} onPress={() => navigation.navigate("screen6")}>
          <MaterialIcons name='arrow-back-ios' size={20} color='black'/> 
        </TouchableOpacity>
        <Text style={style.myCartText}>my cart</Text>
      </View>

      <ScrollView style={{height:responsiveHeight(60)}} contentContainerStyle={style.renderOrder}>
        <View style={style.actualOrder}>
          <View style={style.product}>
            <Image source={require('../assets/images/product.png')} style={style.productImage}/>
            <View style={style.productInfo}>
              <Text style={{color:"gray",fontSize:15,fontWeight:"900"}}>Nike Air Max </Text>
              <Text style={{color:"gray",fontSize:13,fontWeight:"600"}}>Color-White</Text>
              <Text style={{color:"black",fontSize:15,fontWeight:"bold"}}>$299.43</Text>
            </View>
          </View>

          <View style={style.quantitycontainer}>
          <TouchableOpacity style={style.plus}><AntDesign name='plus' size={13} color='gray'/></TouchableOpacity>
            <Text style={style.quantity}>1</Text>
          <TouchableOpacity style={style.plus}><AntDesign name='minus' size={13} color='gray'/></TouchableOpacity>
        </View>
        </View>

        <View style={style.actualOrder}>
          <View style={style.product}>
            <Image source={require('../assets/images/product.png')} style={style.productImage}/>
            <View style={style.productInfo}>
              <Text style={{color:"gray",fontSize:15,fontWeight:"900"}}>Nike Air Max </Text>
              <Text style={{color:"gray",fontSize:13,fontWeight:"600"}}>Color-White</Text>
              <Text style={{color:"black",fontSize:15,fontWeight:"bold"}}>$299.43</Text>
            </View>
          </View>

          <View style={style.quantitycontainer}>
          <TouchableOpacity style={style.plus}><AntDesign name='plus' size={13} color='gray'/></TouchableOpacity>
            <Text style={style.quantity}>1</Text>
          <TouchableOpacity style={style.plus}><AntDesign name='minus' size={13} color='gray'/></TouchableOpacity>
        </View>
        </View>

        <View style={style.actualOrder}>
          <View style={style.product}>
            <Image source={require('../assets/images/product.png')} style={style.productImage}/>
            <View style={style.productInfo}>
              <Text style={{color:"gray",fontSize:15,fontWeight:"900"}}>Nike Air Max </Text>
              <Text style={{color:"gray",fontSize:13,fontWeight:"600"}}>Color-White</Text>
              <Text style={{color:"black",fontSize:15,fontWeight:"bold"}}>$299.43</Text>
            </View>
          </View>

          <View style={style.quantitycontainer}>
          <TouchableOpacity style={style.plus}><AntDesign name='plus' size={13} color='gray'/></TouchableOpacity>
            <Text style={style.quantity}>1</Text>
          <TouchableOpacity style={style.plus}><AntDesign name='minus' size={13} color='gray'/></TouchableOpacity>
        </View>
        </View>

        <View style={style.actualOrder}>
          <View style={style.product}>
            <Image source={require('../assets/images/product.png')} style={style.productImage}/>
            <View style={style.productInfo}>
              <Text style={{color:"gray",fontSize:15,fontWeight:"900"}}>Nike Air Max </Text>
              <Text style={{color:"gray",fontSize:13,fontWeight:"600"}}>Color-White</Text>
              <Text style={{color:"black",fontSize:15,fontWeight:"bold"}}>$299.43</Text>
            </View>
          </View>

          <View style={style.quantitycontainer}>
          <TouchableOpacity style={style.plus}><AntDesign name='plus' size={13} color='gray'/></TouchableOpacity>
            <Text style={style.quantity}>1</Text>
          <TouchableOpacity style={style.plus}><AntDesign name='minus' size={13} color='gray'/></TouchableOpacity>
        </View>
        </View>

        <View style={style.actualOrder}>
          <View style={style.product}>
            <Image source={require('../assets/images/product.png')} style={style.productImage}/>
            <View style={style.productInfo}>
              <Text style={{color:"gray",fontSize:15,fontWeight:"900"}}>Nike Air Max </Text>
              <Text style={{color:"gray",fontSize:13,fontWeight:"600"}}>Color-White</Text>
              <Text style={{color:"black",fontSize:15,fontWeight:"bold"}}>$299.43</Text>
            </View>
          </View>

          <View style={style.quantitycontainer}>
          <TouchableOpacity style={style.plus}><AntDesign name='plus' size={13} color='gray'/></TouchableOpacity>
            <Text style={style.quantity}>1</Text>
          <TouchableOpacity style={style.plus}><AntDesign name='minus' size={13} color='gray'/></TouchableOpacity>
        </View>
        </View>

        <View style={style.actualOrder}>
          <View style={style.product}>
            <Image source={require('../assets/images/product.png')} style={style.productImage}/>
            <View style={style.productInfo}>
              <Text style={{color:"gray",fontSize:15,fontWeight:"900"}}>Nike Air Max </Text>
              <Text style={{color:"gray",fontSize:13,fontWeight:"600"}}>Color-White</Text>
              <Text style={{color:"black",fontSize:15,fontWeight:"bold"}}>$299.43</Text>
            </View>
          </View>

          <View style={style.quantitycontainer}>
          <TouchableOpacity style={style.plus}><AntDesign name='plus' size={13} color='gray'/></TouchableOpacity>
            <Text style={style.quantity}>1</Text>
          <TouchableOpacity style={style.plus}><AntDesign name='minus' size={13} color='gray'/></TouchableOpacity>
        </View>
        </View>

        <View style={style.actualOrder}>
          <View style={style.product}>
            <Image source={require('../assets/images/product.png')} style={style.productImage}/>
            <View style={style.productInfo}>
              <Text style={{color:"gray",fontSize:15,fontWeight:"900"}}>Nike Air Max </Text>
              <Text style={{color:"gray",fontSize:13,fontWeight:"600"}}>Color-White</Text>
              <Text style={{color:"black",fontSize:15,fontWeight:"bold"}}>$299.43</Text>
            </View>
          </View>

          <View style={style.quantitycontainer}>
          <TouchableOpacity style={style.plus}><AntDesign name='plus' size={13} color='gray'/></TouchableOpacity>
            <Text style={style.quantity}>1</Text>
          <TouchableOpacity style={style.plus}><AntDesign name='minus' size={13} color='gray'/></TouchableOpacity>
        </View>
        </View>

        <View style={style.actualOrder}>
          <View style={style.product}>
            <Image source={require('../assets/images/product.png')} style={style.productImage}/>
            <View style={style.productInfo}>
              <Text style={{color:"gray",fontSize:15,fontWeight:"900"}}>Nike Air Max </Text>
              <Text style={{color:"gray",fontSize:13,fontWeight:"600"}}>Color-White</Text>
              <Text style={{color:"black",fontSize:15,fontWeight:"bold"}}>$299.43</Text>
            </View>
          </View>

          <View style={style.quantitycontainer}>
          <TouchableOpacity style={style.plus}><AntDesign name='plus' size={13} color='gray'/></TouchableOpacity>
            <Text style={style.quantity}>1</Text>
          <TouchableOpacity style={style.plus}><AntDesign name='minus' size={13} color='gray'/></TouchableOpacity>
        </View>
        </View>

        <View style={style.actualOrder}>
          <View style={style.product}>
            <Image source={require('../assets/images/product.png')} style={style.productImage}/>
            <View style={style.productInfo}>
              <Text style={{color:"gray",fontSize:15,fontWeight:"900"}}>Nike Air Max </Text>
              <Text style={{color:"gray",fontSize:13,fontWeight:"600"}}>Color-White</Text>
              <Text style={{color:"black",fontSize:15,fontWeight:"bold"}}>$299.43</Text>
            </View>
          </View>

          <View style={style.quantitycontainer}>
          <TouchableOpacity style={style.plus}><AntDesign name='plus' size={13} color='gray'/></TouchableOpacity>
            <Text style={style.quantity}>1</Text>
          <TouchableOpacity style={style.plus}><AntDesign name='minus' size={13} color='gray'/></TouchableOpacity>
        </View>
        </View>

        <View style={style.footer}/>
      </ScrollView>

      <View style={style.lowerContainer}>
        <View style={style.totalPrice}>
          <Text style={{fontSize:18,fontWeight:"500",color:"black"}}>Total Price</Text>
          <Text style={{fontSize:18,fontWeight:"bold",color:"black"}}>$300</Text>
        </View>
    
        <TouchableOpacity style={style.orderButton} onPress={() => navigation.navigate("screen12")}>
          <Text style={{alignSelf:'center',color:"white",fontSize:19,fontWeight:"700"}}>Review Payment & Address</Text>
        </TouchableOpacity>
      </View> 


      <Lowerbar/>
    </View>
  )
}

const style = StyleSheet.create({
  cartBar:{
    width:responsiveWidth(95),
    top: responsiveHeight(2),
    alignSelf:"center",
    flexDirection:'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    zIndex:1
  },

  buttonBox:{
    alignItems:'center',
    justifyContent: 'center',
  },

  myCartText:{
    fontSize:24,
    fontWeight:"bold",
    color:"black",
    right: 132,
    textTransform: 'capitalize'
  },

  renderOrder:{
    width: responsiveWidth(100),
    height: 'auto',
    top: responsiveHeight(6),
    alignItems: 'center',
    gap: 16,
    paddingVertical: 12
  },

  actualOrder:{
    width: responsiveWidth(95),
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    borderRadius: 12
  },

  product:{
    flexDirection:'row',
    alignItems:'flex-start',
    gap: 16
  },

  productImage:{
    width: responsiveWidth(24),
    height: responsiveHeight(12.5),
    borderRadius: 16
  },

  productInfo:{
    top: responsiveHeight(1.5)
  },

  quantitycontainer:{
    alignSelf:"center",
    alignItems:"center",
    justifyContent:"center",
    backgroundColor: 'white',
    borderRadius: 13,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.1,
    shadowRadius: 30,
    elevation: 8,
    padding:7,
  },

  plus:{
    width:responsiveWidth(3.25),
    height:responsiveHeight(3.25),
    alignItems:"center",
    justifyContent:"center"
  },

  quantity:{
    textAlign:"center",
    fontSize:15,
    fontWeight:"600",
  },

  lowerContainer:{
    width: responsiveWidth(100),
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
  },

  footer:{
    height: responsiveHeight(5)
  }
})

export default Cart;