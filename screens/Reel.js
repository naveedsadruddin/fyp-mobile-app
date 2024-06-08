import React from 'react'
import  { useState ,useRef,useEffect} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { SwiperFlatList } from 'react-native-swiper-flatlist';
import Video from 'react-native-video'
import axios from 'axios'
import { View, Text, Image, StyleSheet,ScrollView, TouchableOpacity, TouchableWithoutFeedback} from 'react-native';
import {
  responsiveHeight,
  responsiveFontSize,
  responsiveWidth,
  responsiveScreenFontSize,
  
} from 'react-native-responsive-dimensions';
import { useSelector } from 'react-redux';

import Reels from './Reels';
import codegenNativeCommands from 'react-native/Libraries/Utilities/codegenNativeCommands';
import Lowerbar from './Lowerbar';

function Reel() {
const [currentReel,setCurrentReel]=useState(null);
const [ isPlaying, setIsPlaying]=useState(false);
const [reels,setReels]=useState([]);
// const [token,setToken]=useState('81|i4Jy1dqMZx5OILS1aJgFwzYjBC91PEamSISqw3xQ14540414');
const token = useSelector(state => state.user.userData.token);

const config = {
  headers: {
      'Authorization': `Bearer ${token}`
  }
}
useEffect(() => {       
 axios.get("http://13.49.252.90/api/users/reels", config)
  .then((response) => {
    console.log(response.data);
    console.log("useeffect")
    setReels(response.data.reels);
  })
  .catch((error) => {
    console.error('Error fetching token:', error);
  });
}, []);

const reelRef=useRef(null);
const  togglePlay=()=>{
  setIsPlaying(!isPlaying);
}


const handleScroll=(event)=>{
  const offsetY=event.nativeEvent.contentOffset.y;
  const index=Math.floor(offsetY/responsiveHeight(100));
  setCurrentReel(index);
}
const sellerProfile = require("../assets/images/slider.jpg");

const reelsView = () => {
  if(reels.length > 0){
    console.log(reels);
    return reels.map((reel,index) => {
      if(reel.video_url){
        return (
          <TouchableWithoutFeedback onPress={togglePlay} key={reel.id}>
            <View style={style.Reelcontainer}>
              <Video
                source={{ uri: reel.video_url }}
                style={style.video}
                controls={false}
                resizeMode="cover"
                repeat={true}
                paused={index !== currentReel}
                muted={isPlaying ? index !== currentReel : index === currentReel}
              />
              {isPlaying ?  null : <Ionicons style={style.mute} name="volume-mute" size={70} />}
              <View style={style.content}>
                <View style={style.left}>
                  <Image source={sellerProfile} style={style.profile}/>
                  <View style={style.userinfo}>
                    <Text style={{fontSize:18,fontWeight:"900",color:"white"}}>{reel.user.name}</Text>
                    <Text style={{fontSize:16,fontWeight:"700",color:"white"}}>{'name'}</Text>
                  </View>
                </View>
                <View style={style.right}>
                  <Text style={{fontSize:17,fontWeight:"600",color:"white"}} >See Product</Text>
                </View>
              </View>
              <View style={style.reactionbar}>
                <TouchableOpacity><AntDesign name='hearto' size={35} color='white'/></TouchableOpacity>
                <Text color='white'>{reel.likes_count}</Text>
                <TouchableOpacity><FontAwesome name='comment' size={30} color='white'/></TouchableOpacity>
                <Text color='white'>{reel.comments_count}</Text>

              </View>
            </View>
          </TouchableWithoutFeedback>
        );
      } else {
        return null; 
      }
    });
  } else {
    return (
      <View>
        <Text>No reels found</Text>
      </View>
    );
  }
};


// const videoDatabase=[
//   {id:1, reel:reels[0].video_url,sellerProfile:require("../assets/images/slider.jpg"), sellerName:"naveed",sellerCity:"Karachi Pakistan"},
//   {id:2, reel:require("../assets/reels/6.mp4"), sellerProfile:require("../assets/images/slider.jpg"), sellerName:"Vinay",sellerCity:"Karachi Pakistan"},
//   {id:3, reel:require("../assets/reels/3.mp4"), sellerProfile:require("../assets/images/slider.jpg"), sellerName:"Gaitri",sellerCity:"Karachi Pakistan"},
//   {id:4, reel:require("../assets/reels/4.mp4"), sellerProfile:require("../assets/images/slider.jpg"), sellerName:"Ayush",sellerCity:"Karachi Pakistan"},
//   {id:5, reel:require("../assets/reels/6.mp4"), sellerProfile:require("../assets/images/slider.jpg"), sellerName:"Nimarta",sellerCity:"Karachi Pakistan"}
// ]
  return (
    <>
      
    <SwiperFlatList
      ref={reelRef}
      vertical={true}
      onScroll={handleScroll}
      scrollEventThrottle={200}
      contentContainerStyle={style.scrollcontainer}>
        {reelsView()}
        
     {/* {videoDatabase.map((reel,index) => (
      <TouchableWithoutFeedback onPress={togglePlay}>
       <View key={reel.id} style={style.Reelcontainer}>
          {console.log("index"+index+"\n currentReel"+currentReel)}
        <Video
            source={reel.reel}
            style={style.video}
            controls={false}
            resizeMode="cover"
            repeat={true}
            paused={index!==currentReel}
            muted={isPlaying? index!== currentReel:index===currentReel}
          />
          {isPlaying?  null:<Ionicons style={style.mute}name="volume-mute" size={70} />}
          
          <View style={style.content}>
            <View style={style.left}>
               <Image source={reel.sellerProfile} style={style.profile}/>
               <View style={style.userinfo}>
                <Text style={{fontSize:18,fontWeight:"900",color:"white"}}>{reel.sellerName}</Text>
                <Text style={{fontSize:16,fontWeight:"700",color:"white"}}>{reel.sellerCity}</Text>
               </View>
            </View>
            <View style={style.right}>
               <Text style={{fontSize:17,fontWeight:"600",color:"white"}}>See Product</Text>
             </View>
          </View>
        <View style={style.reactionbar}>
        <TouchableOpacity><AntDesign name='hearto' size={35} color='white'/></TouchableOpacity>
        <TouchableOpacity><FontAwesome name='comment' size={30} color='white'/></TouchableOpacity>
        </View>
       </View>
       </TouchableWithoutFeedback>
       
        ))} */}
      </SwiperFlatList> 
   <Reels/>
   {/* <Lowerbar/> */}
  </>
  )  };
const style=StyleSheet.create({
 Reelcontainer:{
   
    height:responsiveHeight(100),
    width:responsiveWidth(100),
    borderWidth:1,
    borderColor:"black",
    alignSelf:"center"
    
},
video:{
    width:"100%",
    height:"100%"
},
scrollcontainer:{
    backgroundColor:"black",

},
mute:{
  position:"absolute",
    alignSelf:"center",
    top:"45%",
  color:"white"

},
count:{
  color:"white"
},
content:{
    width:"100%",
    height:"10%",
    bottom:responsiveHeight(12),
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",
    paddingHorizontal:10
},
left:{
    width:"50%",
    height:"100%",
    flexDirection:"row",
    gap:12,
   alignItems:"center",
   justifyContent:"center"


},
right:{
    width:"25%",
    height:"100%",
    alignItems:"center",
    justifyContent:"center"

},
profile:{
 width:"30%",
 height:"70%",
 borderRadius:50,


},
 reactionbar:{
    height:"12%",
    width:"15%",
    // backgroundColor:"pink",
    bottom:responsiveHeight(37),
    marginLeft:7.5,
    alignItems:"center",
    justifyContent:"space-between"
    // flexDirection:"column"
 }
})

export default Reel