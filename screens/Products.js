import React from 'react';
import  { useState ,useEffect} from 'react';

import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { View, Text, Image, StyleSheet, TextInput, KeyboardAvoidingView,  TouchableOpacity, ScrollView } from 'react-native';
import {
  responsiveHeight,
  responsiveFontSize,
  responsiveWidth,
  responsiveScreenFontSize,
  
} from 'react-native-responsive-dimensions';
import axios from 'axios'
import Lowerbar from './Lowerbar'
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';

function Products({route }) {
  const { search } = route.params;
  const [searchInput, setSearchInput] = useState(search);
  const [products,setProducts]=useState([]);

  const handleSearchChange = (text) => {
    setSearchInput(text);
  };

  // const [token,setToken]=useState('81|i4Jy1dqMZx5OILS1aJgFwzYjBC91PEamSISqw3xQ14540414');
  const token = useSelector(state => state.user.userData.token);

  const config = {
    headers: {
    'Authorization': `Bearer ${token}`
    }
}

  useEffect(() => {       
    axios.get(`http://13.49.252.90:8000/api/users/products?search=${searchInput}`,config).then((response) =>{
      console.log(response.data);
      setProducts(response.data.products)
    }). catch ((error) => {
    console.error('Error fetching token:', error);
  })
}, []);

const handleSearch =  () => {
  axios.get(`http://13.49.252.90:8000/api/users/products?search=${searchInput}`,config).then((response) =>{
      console.log(response.data);
      setProducts(response.data.products)
    }). catch ((error) => {
    console.error('Error fetching token:', error);
  })
}

const list1 = () => {
  return products.map(element => {
    return (
      <TouchableOpacity onPress={()=>navigation.navigate("screen8" , {id:element.id})}>
        <View style={Style.recomcontainer}  >
        <Image source={{uri: element.images[0].image_uri}} style={Style.container7Picture}/>
        <Text style={Style.productName}>{element.name}</Text>
        <Text style={Style.afterSalePrice}>RS {element.sale_price}</Text>
        {/* <Text style={Style.actualPrice}>$534.33</Text> */}
      </View>
    </TouchableOpacity>

     
    );
  });
};
  const navigation= useNavigation();
  return (
    <>
    <ScrollView Style={{height:"auto",backgroundColor:"#ffff"}}>
        <View style={Style.inputcontainer}>
            <View style={Style.inputWrapper}>
            <TouchableOpacity onPress={handleSearch}>
                <MaterialIcons name='search' size={20} color='gray' style={Style.icon}/>
            </TouchableOpacity>

                <TextInput style={Style.input} placeholder='Search Product' placeholderTextColor='gray'
                        value={searchInput}
                        onChangeText={handleSearchChange}
                />
                <AntDesign name='close' size={20} color='gray' style={Style.icon}/> 
            </View>
        </View>
     
        <View style={Style.container2}>
          <View style={Style.Textcontainer}><Text style={{fontSize:17,fontWeight:"400"}}>{products.length} Products Shown</Text></View>
          <View style={Style.buttonWrapper}>
            <TouchableOpacity style={Style.button}>
              <Text style={{fontSize:16,fontWeight:"400",color:"blue"}}>All Products</Text>
              <MaterialIcons name='keyboard-arrow-down' size={30} color='gray'/>
            </TouchableOpacity>
          </View>
        </View>
        <View style={Style.container7}>
          {list1()}
       {/* <TouchableOpacity onPress={()=>navigation.navigate("screen8" , 9)}><View style={Style.recomcontainer}  >
      <Image source={require("../assets/images/image-Product.jpg")} style={Style.container7Picture}/>
      <Text style={Style.productName}>Nike Air Max 270 React ENG</Text>
      <Text style={Style.afterSalePrice}>$299.43</Text>
      <Text style={Style.actualPrice}>$534.33</Text>
    </View>
    </TouchableOpacity>
    <View style={Style.recomcontainer}>
      <Image source={require("../assets/images/image-Product.jpg")} style={Style.container7Picture}/>
      <Text style={Style.productName}>Nike Air Max 270 React ENG</Text>
      <Text style={Style.afterSalePrice}>$299.43</Text>
      <Text style={Style.actualPrice}>$534.33</Text>
    </View>
    <View style={Style.recomcontainer}>
      <Image source={require("../assets/images/image-Product.jpg")} style={Style.container7Picture}/>
      <Text style={Style.productName}>Nike Air Max 270 React ENG</Text>
      <Text style={Style.afterSalePrice}>$299.43</Text>
      <Text style={Style.actualPrice}>$534.33</Text>
    </View>
    <View style={Style.recomcontainer}>
      <Image source={require("../assets/images/image-Product.jpg")} style={Style.container7Picture}/>
      <Text style={Style.productName}>Nike Air Max 270 React ENG</Text>
      <Text style={Style.afterSalePrice}>$299.43</Text>
      <Text style={Style.actualPrice}>$534.33</Text>
  </View>
  <View style={Style.recomcontainer}>
      <Image source={require("../assets/images/image-Product.jpg")} style={Style.container7Picture}/>
      <Text style={Style.productName}>Nike Air Max 270 React ENG</Text>
      <Text style={Style.afterSalePrice}>$299.43</Text>
      <Text style={Style.actualPrice}>$534.33</Text>
    </View>
    <View style={Style.recomcontainer}>
      <Image source={require("../assets/images/image-Product.jpg")} style={Style.container7Picture}/>
      <Text style={Style.productName}>Nike Air Max 270 React ENG</Text>
      <Text style={Style.afterSalePrice}>$299.43</Text>
      <Text style={Style.actualPrice}>$534.33</Text>
    </View> */}
  </View>
    </ScrollView>
<Lowerbar/>

    </>
  )
};
const Style=StyleSheet.create({
    inputcontainer: {
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
      input: {
        paddingHorizontal:2,
        flex:1
    },
    icon:{
        paddingHorizontal:10
    },
    container2:{
      width:responsiveWidth(100),
      height:responsiveHeight(8),
      alignSelf:"center",
      top:responsiveHeight(2),
      flexDirection:"row",
      justifyContent:"space-between"
    },
  Textcontainer:{
    width:responsiveWidth(25),
    height:responsiveHeight(7),
    alignItems:"center",
    justifyContent:"center",
    
  },
  buttonWrapper:{
    width:responsiveWidth(47),
    height:responsiveHeight(7),
    
    
       
  },
  button:{
    width:responsiveWidth(60),
    height:responsiveHeight(7),
    alignItems:"center",
    justifyContent:"center",
    flexDirection:"row",
  
  
    
  },
  container7:{
    width:responsiveWidth(95),
    height: responsiveHeight(125),
    top:responsiveHeight(3),
    alignSelf:"center",
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    padding: 10,
    gap: 20,
    
  },
  
  recomcontainer:{
    width: responsiveWidth(40),
    borderWidth: 1,
    borderColor: '#EBF0FF',
    flexDirection: 'column',
    padding: 15
  },
  
  container7Picture:{
    alignSelf: 'center',
    width: 150,
    height: 150
  },
  
  productName:{
    marginTop: 10,
    fontWeight: '900',
    color: 'black',
  },
  
  afterSalePrice:{
    marginTop: 30,
    color: 'black'
  },
  
  actualPrice:{
    textDecorationLine: 'line-through',
    marginTop: 7
  },
  
});

export default Products