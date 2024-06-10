import React,{useState} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign'
import { View, Text, Image, StyleSheet, TextInput, KeyboardAvoidingView,  TouchableOpacity } from 'react-native';
import axios from 'axios';
import {
  responsiveHeight,
  responsiveFontSize,
  responsiveWidth,
  responsiveScreenFontSize,
  
} from 'react-native-responsive-dimensions';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch } from 'react-redux';
import { login } from '../userSlice'

export default function SignInScreen() {
   const [error ,setError]= useState('');
  const [data ,setData]= useState({
     email:'naveed1@gmail.com',
     password:'password'
  })
  const navigation=useNavigation();
  const dispatch = useDispatch();

  const SignIn = () => {
    try {
      console.log('here')
       axios.post("http://192.168.2.107:8000/api/user/login", data).then((response) =>{
        console.log(response.data)
  
        if (response.data.error) {
          setError(response.data.data);
        } else {
          dispatch(login(response.data));
          navigation.navigate("screen6");
        }
        // setList(list1())
      }). catch ((error) => { 
        console.log(error)
           setError(error.response.data.data.message);

    })


    } catch (error) {
    }
  };
  const handleInputChange = (event) => {
        const { name, value } = event.target;
        setData((prevProps) => ({
          ...prevProps,
          [name]: value
        }));
        console.log(data)
      };
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
        <Text style={styles.reelit}>Reel It Commerce</Text>
        <Text style={styles.signintext}>Sign in to continue</Text>
      </View>

      <View style={styles.inputContainer}>
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
      <Text style={{color:"red"}}>{error}</Text>
      <Text style={styles.forgotpass}>Forgot password?</Text>
        

          <TouchableOpacity style={styles.signinbutton}>
        <View style={styles.buttonbox}>
            <Text style={styles.signin} onPress={SignIn}>Sign In</Text>
        </View>
          </TouchableOpacity>
       <Text style={styles.register}>Don't have an account yet? <Text style={{color:"#9c2bb3"}} onPress={()=>navigation.navigate("screen4")}>Register</Text></Text>
        
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
  reelit: {
    color: 'black',
    fontSize: responsiveFontSize(3),
    marginTop: responsiveHeight(-3),
  },
  signintext: {
    color: 'gray',
    fontSize: responsiveFontSize(2.5),
  },
  inputContainer: {
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
  forgotpass:{
  color:"#9c2bb3",
  textAlign:"right",
  fontSize:responsiveFontSize(2),
  fontWeight:"normal",
  bottom:responsiveHeight(0.5)


  },
  buttonbox:{
  // backgroundColor:"pink",
  width:responsiveWidth(90),
  height:responsiveHeight(9),
  top:responsiveHeight(2)
  },
  signinbutton:{
    backgroundColor:"#9c2bb3",
    width:responsiveWidth(90),
    height:responsiveHeight(7),
    borderRadius:(13),
    top:responsiveHeight(1),
   justifyContent:"center",
   alignItems:"center",
  },
 signin:{
 
  color:"#ffff",
  fontSize: responsiveScreenFontSize(2.5),
  fontWeight:"bold",
  textAlign:"center"
  },

 register:{
color:"gray",
top:responsiveHeight(3),
paddingHorizontal:7,
fontWeight:"bold",
fontSize:responsiveFontSize(1.8)
 }
});
