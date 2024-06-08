import React from 'react'
import { StyleSheet, Touchable, TouchableOpacity, View,Text } from 'react-native'
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { useNavigation } from '@react-navigation/native';
function Lowerbar() {
  const navigation = useNavigation();
  return (
    <View style={{backgroundColor:"#ffff",flex:1}}>
        <View style={style.container}>
            <View style={style.Lowerbar}>
           <TouchableOpacity onPress={() => navigation.navigate("screen10")}>
              <View style={style.box}> 
                <MaterialCommunityIcons name='video-vintage' size={32} color='#9098B1'/>
                <Text style={{color:"#9098B1",fontWeight:"700",fontSize:15}}>Reels</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("screen13")}>
              <View style={style.box}> 
                <MaterialCommunityIcons name='message-outline' size={32} color='#9098B1'/>
                <Text style={{color:"#9098B1",fontWeight:"700",fontSize:15}}>Message</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("screen6")}>
              <View style={style.box}> 
                <MaterialCommunityIcons name='home' size={32} color='#9098B1'/>
                <Text style={{color:"#9098B1",fontWeight:"700",fontSize:15}}>Home</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("screen9")}>
              <View style={style.box}> 
                <MaterialCommunityIcons name='cart' size={32} color='#9098B1'/>
                <Text style={{color:"#9098B1",fontWeight:"700",fontSize:15}}>Cart</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("screen11")}>
              <View style={style.box}> 
                <MaterialCommunityIcons name='account' size={32} color='#9098B1'/>
                <Text style={{color:"#9098B1",fontWeight:"700",fontSize:15}}>Account</Text>
              </View>
            </TouchableOpacity>
           
             
            </View>
        </View>
    </View>
  )
};
const style=StyleSheet.create({
container:{

  height:responsiveHeight(10),
  width:responsiveWidth(99),
  bottom:0,
  position:"absolute",
  alignSelf:"center",
  alignItems:"center",
  justifyContent:"center"

},
Lowerbar:{
 backgroundColor:"white",
 height:responsiveHeight(10),
 width:responsiveWidth(99),
 borderRadius:19,
 elevation:5,
 shadowColor: '#8D5CF4',
 shadowOffset: { width: 0, height: 4},
 shadowOpacity: 0.3,
 shadowRadius: 5,
 flexDirection:"row",
 alignItems:"center",
 justifyContent:"space-evenly"
},
box:{
  width:responsiveWidth(17),
  height:responsiveHeight(8),
  flexDirection:"column",
  justifyContent:"center",
  alignItems:"center"

}

})

export default Lowerbar