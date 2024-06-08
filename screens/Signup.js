
import { useNavigation } from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign'
import React,{useState,useEffect}from 'react';
import axios from 'axios';
import { View, Text, Image, StyleSheet, TextInput, KeyboardAvoidingView, Touchable, TouchableOpacity } from 'react-native';
import {
  responsiveHeight,
  responsiveFontSize,
  responsiveWidth,
  responsiveScreenFontSize,
  
} from 'react-native-responsive-dimensions';
import AsyncStorage from '@react-native-async-storage/async-storage';
export default function Signup() {
  const [error ,setError]= useState('');
  const [data ,setData]= useState({
    firstName:'',
    lastName:'a',
     email:'',
     password:'',
     cpassword:''

  })
  const navigation=useNavigation();
  const Signup = () => {
    console.log('here')
    axios.post("http://13.49.252.90/api/user/register", data).then((response) =>{
      console.log('inside')
      console.log(response)

      if (response.data.error) {
        setError(response.data.data);
      } else {
        navigation.navigate("screen6");
      }
      // setList(list1())
    }). catch ((error) => { 
         setError(error.response.data.data.message);

  })
    // axios.post("http://13.49.252.90:8001/api/user/register", data).then((response) =>{
    //     console.log(response)
  
    //     if (response.data.error) {
    //       setError(response.data.data);
    //     } else {
    //       navigation.navigate("screen6");
    //     }
    //     // setList(list1())
    //   }). catch ((error) => { 
    //        setError(error.response.data.data.message);

    // })
  }
    //   const response =  axios.post("http://13.49.252.90:8001/api/user/register", data);
  
    //   if (response.data.error) {
    //     setError(response.data.data);
    //   } else {
    //     navigation.navigate("screen6");
    //   }
    // } catch (error) {
    //   console.log(error)
    //   setError('Something went wrong');
    // }
  // const handleInputChange = (event) => {
  //       const { name, value } = event.target;
  //       setData((prevProps) => ({
  //         ...prevProps,
  //         [name]: value
  //       }));
  //       console.log(data)
  //     };
  const handleOnChange = (name, value) => {
    setData({ ...data, [name]: value });
    console.log(data)
  };
  return (
    <KeyboardAvoidingView style={styles.container}>
    <View style={styles.logoContainer}>
      <Image
        style={styles.logo}
        source={require('../assets/images/logo-image.png')}
      />
      <Text style={styles.name}>Reel It Commerce</Text>
      
    </View>

    <View style={styles.inputbox}>
    <View style={styles.inputWrapper}>
        <AntDesign name='user' size={20} color='gray' style={styles.icon}/>
        <TextInput
            style={styles.input}
            placeholder='Full Name'  
            name='firstName'
            value={data.firstName}
            onChangeText={(text) => handleOnChange('firstName', text)}

            placeholderTextColor='gray'
          />
          
      </View>
      <View style={styles.inputWrapper}>
        <AntDesign name='mail' size={20} color='gray' style={styles.icon}/>
        <TextInput
          style={styles.input}
          placeholder='Email'
          name='email'
          value={data.email}
          onChangeText={(text) => handleOnChange('email', text)}
          placeholderTextColor='gray'
          
        />
      </View>
      <View style={styles.inputWrapper}>
        <AntDesign name='lock' size={20} color='gray' style={styles.icon}/>
        <TextInput
            style={styles.input}
            placeholder='Password'
            name='password'
            value={data.password}
            onChangeText={(text) => handleOnChange('password', text)}
            placeholderTextColor='gray'
            secureTextEntry={true}
          />
          
      </View>
      <View style={styles.inputWrapper}>
        <AntDesign name='lock' size={20} color='gray' style={styles.icon}/>
        <TextInput
          style={styles.input}
          placeholder='Confirm Password'
          name='cpassword'
          value={data.cpassword}
          onChangeText={(text) => handleOnChange('cpassword', text)}
          placeholderTextColor='gray'
          secureTextEntry={true}
        />
      </View>
      
     <Text style={{color:"red"}}>{error}</Text>

      <View style={styles.buttonbox1}>
        <TouchableOpacity style={styles.signupbutton}>
          <Text style={styles.signup} onPress={Signup}>Sign Up</Text>
        </TouchableOpacity>
      </View>

     <Text style={styles.accounttext}>Already have an account? <Text style={{color:"#9c2bb3"}} onPress={()=>navigation.navigate("screen5")}>Login</Text></Text>
    </View>
  </KeyboardAvoidingView>
  );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#ffff',
    },
    logoContainer: {
      paddingTop: responsiveHeight(5),
      alignItems: 'center',
    },
    logo: {
      alignSelf: 'center',
    },
    name: {
      color: 'black',
      fontSize: responsiveFontSize(3),
      marginTop: responsiveHeight(-3),
    },
    
    
    inputbox: {
      position: 'relative',
      top: responsiveHeight(5),
      paddingHorizontal: 20,
    },
    inputWrapper:{
    display:"flex",
    flexDirection:"row",
    alignItems:"center",
    borderColor:"gray",
    borderWidth:1,
    borderRadius:16,
    backgroundColor:"white",
    marginBottom:responsiveHeight(2.5)
  
    },
    input: {
      height: responsiveHeight(6),
      paddingHorizontal: 20,
      flex:1
  
    },
    icon:{
      marginHorizontal:10
    },
    buttonbox1:{
    // backgroundColor:"pink",
    width:responsiveWidth(90),
    height:responsiveHeight(9),
    top:responsiveHeight(2)
    },
    signupbutton:{
      backgroundColor:"#9c2bb3",
      width:responsiveWidth(90),
      height:responsiveHeight(7),
      borderRadius:(13),
      top:responsiveHeight(1),
  
    },
signup:{
   
   color:"#ffff",
   fontSize: responsiveScreenFontSize(2.5),
   alignSelf:"center",
   top:responsiveHeight(1.5),
   fontWeight:"bold",
   
   
   },
   accounttext:{
  color:"gray",
  top:responsiveHeight(3),
  paddingHorizontal:7,
  fontWeight:"bold",
  fontSize:responsiveFontSize(1.8)
   }
  });
