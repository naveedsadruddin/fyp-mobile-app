import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {
  Keyboard,
  KeyboardAvoidingView,
  StyleSheet,
  TouchableNativeFeedbackComponent,
  TouchableOpacity,
  View,
  Text,
  TextInput
} from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

function EditProfile() {
  return (
    <KeyboardAvoidingView contentContainerStyle={style.EditProfilePage}>
      <View style={style.profileBar}>
        <TouchableOpacity>
          <MaterialCommunityIcons name="chevron-left" size={40} color="black" />
        </TouchableOpacity>
        <Text style={style.EditUserText}>Edit User</Text>
      </View>
     
      <View style={style.inputbox}>
    <View style={style.inputWrapper}>
        <AntDesign name='user' size={20} color='gray' style={style.icon}/>
        <TextInput
            style={style.input}
            placeholder='Full Name'  
           

            placeholderTextColor='gray'
          />
          
      </View>
      <View style={style.inputWrapper}>
        <AntDesign name='mail' size={20} color='gray' style={style.icon}/>
        <TextInput
          style={style.input}
          placeholder='Email'
         
          placeholderTextColor='gray'
          
        />
      </View>
      <View style={style.inputWrapper}>
        <AntDesign name='lock' size={20} color='gray' style={style.icon}/>
        <TextInput
            style={style.input}
            placeholder='Password'
           
            placeholderTextColor='gray'
            secureTextEntry={true}
          />
          
      </View>
      <View style={style.inputWrapper}>
        <AntDesign name='lock' size={20} color='gray' style={style.icon}/>
        <TextInput
          style={style.input}
          placeholder='Confirm Password'
         
          placeholderTextColor='gray'
          secureTextEntry={true}
        />
      </View>
      </View>
      <TouchableOpacity style={style.updatebtnbox}>
        <Text style={style.updatebutton}>Update Profile</Text>
        </TouchableOpacity>
    </KeyboardAvoidingView>
  );
}
const style = StyleSheet.create({
  EditProfilePage: {
    gap: 100,
    flex:1,
  },
  profileBar: {
    width: responsiveWidth(100),

    flexDirection: 'row',
    padding: 8,
    alignItems: 'center',
  },
  EditUserText: {
    fontSize: 24,
    fontWeight: '700',
    color: 'black',
    left: 115,
  },
 
  inputbox: {
    position: 'relative',
    top: responsiveHeight(5),
    paddingHorizontal: 20,
    gap:10
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
  updatebtnbox:{
    alignItems:"center",
    justifyContent:"center",
    width:responsiveWidth(90),
    backgroundColor:"#9c2bb3",
    height:responsiveHeight(8),
    borderRadius:16,
    alignSelf:"center",
    top:responsiveHeight(7)
  },
  updatebutton:{
    color:"white",
    fontSize:20,
    fontWeight:"600"
  }
});

export default EditProfile;
