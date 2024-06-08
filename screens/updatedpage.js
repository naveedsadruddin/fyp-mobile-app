
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { View, Text, Image, StyleSheet, TextInput,  ScrollView, TouchableOpacity } from 'react-native';
import {
  responsiveHeight,
  responsiveFontSize,
  responsiveWidth,
  responsiveScreenFontSize,
  
} from 'react-native-responsive-dimensions';

function Updatedpage() {
  return (
  
      <ScrollView style={{flex:1,backgroundColor:"#ffff"}}>
     
        <View style={style.inputcontainer}>
          <View style={style.inputWrapper}>
            <MaterialIcons name='search' size={20} color='gray' style={style.icon}/> 
            <TextInput style={style.input} placeholder='Search Product' placeholderTextColor='gray'/>
            <AntDesign name='close' size={20} color='gray' style={style.icon}/> 
          </View>
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={style.container2}>
        {/* <View style={style.maincontainer}> */}
          
        {/* <View style={style.container2}> */}
        <Image source={require('../assets/images/product.png')}style={{  width: responsiveWidth(60),height:responsiveHeight(30),borderRadius:8}}/>
        <Image source={require('../assets/images/product.png')}style={{   width: responsiveWidth(60),height:responsiveHeight(30),borderRadius:8}}/>
        <Image source={require('../assets/images/product.png')}style={{ width: responsiveWidth(60),height:responsiveHeight(30),borderRadius:8  }}/>
        <Image source={require('../assets/images/product.png')}style={{  width: responsiveWidth(60),height:responsiveHeight(30),borderRadius:8}}/>
        
        {/* </View> */}
        </ScrollView>
        <View style={style.maincontainer}>
    
       <View style={style.wrapper} >
                
                    <Text style={style.productName}>Nike Air Max 270 React ENG</Text>
                      <View style={style.star}>
                          < MaterialIcons name='star' size={18} color='yellow'/>
                          < MaterialIcons name='star' size={18} color='yellow'/>
                          < MaterialIcons name='star' size={18} color='yellow'/>
                          < MaterialIcons name='star' size={18} color='yellow'/>
                          < MaterialIcons name='star' size={18} color='gray'/>
                      </View>
                    <Text style={style.actualPrice}>$299,43</Text>
                        <View style={style.price}>
                            <Text style={style.afterSalePrice}>$534.33</Text>
                            <Text style={style.redtxt}>24%</Text>
                    </View>

                        <Text style={{color:"black",top:responsiveHeight(2.5),fontSize:15,fontWeight:"bold"}}>Description</Text>
                        <Text style={{top:responsiveHeight(2.5)}} >
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer.
                        </Text>
                      <View style={style.btnbox}>
                        <TouchableOpacity style={style.btn} onPress={()=>navigation.navigate("screen9")}><Text style={{color:"white",fontWeight:"700"}}>Buy Now</Text></TouchableOpacity>
                        <TouchableOpacity style={style.btn}><Text style={{color:"white",fontWeight:"700"}}>Add to cart</Text></TouchableOpacity>
                      </View>
              
        
                      </View>
        <View style={style.Container3}>
         <Text style={{color:"blue",fontSize:17,fontWeight:"700",paddingHorizontal:(10)}}>REVIEWS</Text>
         <View style={style.content}>
          <View style={style.picture}></View>
          <View style={style.name}>
          <View style={style.star}>
              < MaterialIcons name='star' size={18} color='yellow'/>
              < MaterialIcons name='star' size={18} color='yellow'/>
              < MaterialIcons name='star' size={18} color='yellow'/>
              < MaterialIcons name='star' size={18} color='yellow'/>
              < MaterialIcons name='star' size={18} color='gray'/>
             
                    </View>
                    <Text style={{fontSize:18,fontWeight:"700",padding:8}}>Baryan</Text>
          </View>
         </View>
         <Text style={{padding:7}}>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum has been the industry's standard dummy text everwhen an unknown printer took a galley of type and scrambled it to make a type specimen book.

         </Text>

       
         <View style={style.content}>
          <View style={style.picture}></View>
          <View style={style.name}>
          <View style={style.star}>
              < MaterialIcons name='star' size={18} color='yellow'/>
              < MaterialIcons name='star' size={18} color='yellow'/>
              < MaterialIcons name='star' size={18} color='yellow'/>
              < MaterialIcons name='star' size={18} color='yellow'/>
              < MaterialIcons name='star' size={18} color='gray'/>
             
                    </View>
                    <Text style={{fontSize:18,fontWeight:"700",padding:8}}>Baryan</Text>
          </View>
         </View>
        <Text style={{padding:7}}>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum has been the industry's standard dummy text everwhen an unknown printer took a galley of type and scrambled it to make a type specimen book.

         </Text>

        </View>
        </View>
      
            
    
      </ScrollView>
  )
}
const style=StyleSheet.create({
   
  inputcontainer:{
    top: responsiveHeight(2),
    width:responsiveWidth(90),
    height:responsiveHeight(12),
    alignSelf:"center",
    alignItems:"center",
    justifyContent:"center"
  },
  inputWrapper:{
    flexDirection:"row",
    alignItems:"center",
    borderRadius:16,
    backgroundColor:"white",
    width:responsiveWidth(80),
    elevation: 5,
    shadowColor: '#5C61F4',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  input:{
    paddingHorizontal:2,
    flex:1
  },
  icon:{
    paddingHorizontal:10
  },
  maincontainer:{
      width:responsiveWidth(98),
      height:responsiveHeight(100),
      // borderColor:"gray",
      // borderWidth:1,
      top:responsiveHeight(3),
      alignSelf:"center"
  },
  container2:{
    // width:responsiveWidth(95),
    // height:responsiveHeight(30),
    // backgroundColor:"red",
    gap:110,
    paddingHorizontal:80,
    top:responsiveHeight(5),

    
  },
  
  wrapper:{
  // backgroundColor:"red",
  paddingHorizontal:15
  },
    
  productName:{
      fontSize:20,
      fontWeight:"700",
      color:"black",
      top:responsiveHeight(1),
      // paddingHorizontal:10
  },
  star:{
      width:responsiveWidth(27),
      height:responsiveHeight(2.5),
      // backgroundColor:"red",
      top:responsiveHeight(0.75),
      flexDirection:"row",
      gap:1,
      // marginLeft:8
  },
  
  actualPrice:{
     fontSize:18,
     fontWeight:"800",
      color:"black",
      top:responsiveHeight(1.5),
      // paddingHorizontal:10
  },
  price:{
      flexDirection:"row",
      top:responsiveHeight(1.5),
      // paddingHorizontal:10
       
  },
  afterSalePrice:{
     
      color:"gray",
      textDecorationLine:"line-through",
      fontSize:18,
      fontWeight:"800"
  },
  redtxt:{
      color:"red",
      paddingHorizontal:10,
      fontWeight:"800",
      fontSize:18
  },
  btnbox:{
    width:responsiveWidth(48),
    height:responsiveHeight(5.5),
    // backgroundColor:"yellow",
    top:responsiveHeight(4.5),
    justifyContent:"space-around",
    flexDirection:"row",
    // alignItems:"center",
    // alignSelf:"center"
    
  },
  btn:{
    width:responsiveWidth(22),
    height:responsiveHeight(3),
    backgroundColor:"blue",
    alignItems:"center",
    justifyContent:"center",
    borderRadius:14
    
  },
  Container3:{
      width:responsiveWidth(95),
      height:responsiveHeight(75),
      alignSelf:"center",
      top:responsiveHeight(4),
      // backgroundColor:"red"
  },
  content:{
    width:responsiveWidth(55),
    height:responsiveHeight(8),
    // backgroundColor:"green",
    flexDirection:"row",
    alignItems:"center",
    marginLeft:7
    
  },
  picture:{
    backgroundColor:"pink",
    width:responsiveWidth(15),
    height:responsiveHeight(7),
    borderRadius:100
  
  },
  name:{
    // backgroundColor:"red",
    height:responsiveHeight(7),
    width:responsiveWidth(25),
  
   
  },
  
  
  
  });
  

export default Updatedpage