import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {View, Text, StyleSheet, TouchableOpacity,Image} from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import { useNavigation } from '@react-navigation/native';
function ChatHeader({name}) {
  const navigation=useNavigation()
  return (
    <View style={style.bar}>
     <TouchableOpacity onPress={()=>navigation.navigate("screen1")}>
        <MaterialCommunityIcons name="chevron-left" size={40} color="white" />
        </TouchableOpacity>
      <View style={style.right}>
        <View style={style.profile}>
          <Image style={{width:"100%",height:"100%" ,borderRadius:50}} source={require("../assets/users/user1.jpg")}/>
        </View>
        <View style={style.username}>
          <Text style={{color: 'white', fontWeight: '600', fontSize: 20}}>
            {name}
          </Text>
          {/* <Text style={{color: 'white', fontWeight: '400', fontSize: 16}}>
            Active
          </Text> */}
        </View>
      </View>
    </View>
  );
}
const style = StyleSheet.create({

  bar: {
    backgroundColor: '#9c2bb3',
   width: responsiveWidth(100),
    height: responsiveHeight(10),
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    
  },
  right: {
    width: '90%',
    height: '90%',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginLeft: 20,
    alignItems: 'center',
    gap:10
  },
  profile: {
    width: 50,
    height: 50,
    backgroundColor: 'pink',
    borderRadius: 100,
  },
  username: {
   
    width:"100%"
   
  },
  
});

export default ChatHeader;
