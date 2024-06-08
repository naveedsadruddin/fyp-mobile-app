import React, { useState, useRef } from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { SwiperFlatList } from 'react-native-swiper-flatlist';
import Video from 'react-native-video';
import { View, Text, Image, StyleSheet, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import Reels from './Reels';
import Lowerbar from './Lowerbar';

function ReelComponent({ reel, handleLike }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLike, setIsLike] = useState(false);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const toggleLikeButton = () => {
    handleLike(reel.id)
    setIsLike(!isLike)
  };

  return (
    <TouchableWithoutFeedback onPress={togglePlay}>
      <View style={styles.Reelcontainer}>
        <Video
          source={reel.reel}
          style={styles.video}
          controls={false}
          resizeMode="cover"
          repeat={true}
          paused={!isPlaying}
          audio={true}
          muted={!isPlaying}

        />
        {!isPlaying && <Ionicons style={styles.mute} name="play" size={70} />}
        <View style={styles.content}>
          <View style={styles.left}>
            <Image source={reel.sellerProfile} style={styles.profile} />
            <View style={styles.userinfo}>
              <Text style={{ fontSize: 18, fontWeight: "900", color: "white" }}>{reel.sellerName}</Text>
              <Text style={{ fontSize: 16, fontWeight: "700", color: "white" }}>{reel.sellerCity}</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.right} onPress={() => console.log('See Product')}>
            <Text style={{ fontSize: 17, fontWeight: "600", color: "white" }}>See Product</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.reactionbar}>
          <TouchableOpacity onPress={toggleLikeButton} style={{alignItems:"center"}}>
            <AntDesign name={isLike ? 'heart' : 'hearto'} size={35} color={isLike? "red":"white"} />
            <Text style={{color:'white', fontSize: 16}}>{reel.liked}</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => console.log('Comment')}>
            <FontAwesome name='comment' size={30} color='white' />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

function ReelC2() {
  const reelRef = useRef(null);
  const [videoDatabase, setVideoDatabase] = useState([
    {id:1, reel:require("../assets/reels/1.mp4"),sellerProfile:require("../assets/images/slider.jpg"), sellerName:"naveed",sellerCity:"Karachi Pakistan", liked:0},
    {id:2, reel:require("../assets/reels/6.mp4"), sellerProfile:require("../assets/images/slider.jpg"), sellerName:"Vinay",sellerCity:"Karachi Pakistan", liked:0},
    {id:3, reel:require("../assets/reels/3.mp4"), sellerProfile:require("../assets/images/slider.jpg"), sellerName:"Gaitri",sellerCity:"Karachi Pakistan", liked:0},
    {id:4, reel:require("../assets/reels/4.mp4"), sellerProfile:require("../assets/images/slider.jpg"), sellerName:"Ayush",sellerCity:"Karachi Pakistan", liked: 0},
    {id:5, reel:require("../assets/reels/6.mp4"), sellerProfile:require("../assets/images/slider.jpg"), sellerName:"Nimarta",sellerCity:"Karachi Pakistan", liked: 0},
    {id:7, reel:require("../assets/reels/7.mp4"), sellerProfile:require("../assets/images/slider.jpg"), sellerName:"Shilpa",sellerCity:"Karachi Pakistan", liked: 0}
  ]);

  const handleLike = (reelID) => {
    setVideoDatabase(prevVideos => {
      return prevVideos.map(video => {
        if (video.id === reelID) {
          return {
             ...video, 
             liked: !video.liked ? video.liked + 1 : video.liked - 1 
            }
        }
        return video;
      })
    })
  }

  return (
    <>
      <SwiperFlatList
        ref={reelRef}
        vertical={true}
        scrollEventThrottle={200}
        contentContainerStyle={styles.scrollcontainer}>
        {videoDatabase.map(reel => (
          <ReelComponent key={reel.id} reel={reel} handleLike={handleLike} />
        ))}
      </SwiperFlatList>
      <Reels />
      <Lowerbar />
    </>
  );
};

const styles = StyleSheet.create({
  Reelcontainer: {
    height: responsiveHeight(100),
    width: responsiveWidth(100),
    borderWidth: 1,
    borderColor: "black",
    alignSelf: "center",
  },
  video: {
    width: "100%",
    height: "90%",
  },
  scrollcontainer: {
    backgroundColor: "black",
  },
  mute: {
    position: "absolute",
    alignSelf: "center",
    top: "45%",
    color: "white"
  },
  content: {
    width: "100%",
    height: "10%",
    bottom: responsiveHeight(12),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10
  },
  left: {
    width: "50%",
    height: "100%",
    flexDirection: "row",
    gap: 12,
    alignItems: "center",
    justifyContent: "center"
  },
  right: {
    width: "25%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center"
  },
  profile: {
    width: "30%",
    height: "70%",
    borderRadius: 50,
  },
  reactionbar: {
    height: "12%",
    width: "15%",
    bottom: responsiveHeight(37),
    marginLeft: 7.5,
    alignItems: "center",
    justifyContent: "space-between"
  }
});

export default ReelC2;