import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, Image, ScrollView, TouchableOpacity, TextInput } from "react-native";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FlatList from "flatlist-react/lib";
import { responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions";
import { horizontal } from "react-native-swiper-flatlist/src/themes";
import {useNavigation} from '@react-navigation/native';
import Lowerbar from './Lowerbar';
import { useSelector } from "react-redux";
import { io } from "socket.io-client";
import axios from "axios";
const socket = io('http://13.49.252.90:4000');

const UserScreen = () => {
  const navigation = useNavigation();
  const userId  =  useSelector(state => state.user.userData.user.id);
 const profileImage = require("../assets/users/user1.jpg");
  const [chatList, setChatList] = useState([]);
  const setChatList1 = () => {
    axios
      .get(`http://13.49.252.90:4000/chat-listing/${userId}`)
      .then((response) => {
        console.log(response.data)
          setChatList(response.data);
      })
      .catch((error) => {

      });
    }
  const joinChat = () => {
    socket.emit('join', userId);
  };
  useEffect(() => {
    setChatList1();
    joinChat();
    socket.on(`chat-${userId}`, (newMessage) => { 
        setChatList1();
    });
    console.log(chatList);
}, []);
  // const Users = [
  //   {
  //     id: 1,
  //     userName: "sughand kingrani",
  //     userProfile: require("../assets/users/user1.jpg"),
  //     messageTime: "4 mins ago",
  //     messageText: "Hey there, I'm using Reel It Chatbot",
  //   },
  //   {
  //     id: 2,
  //     userName: "Naveed saddurdin",
  //     userProfile: require("../assets/users/user3.jpg"),
  //     messageTime: "2 mins ago",
  //     messageText: "Hey there, I'm using Reel It Chatbot",
  //   },
  //   {
  //       id: 3,
  //       userName: "nimarta kingrani",
  //       userProfile: require("../assets/users/user4.jpg"),
  //       messageTime: "3 mins ago",
  //       messageText: "Hey there, I'm using Reel It Chatbot",
  //     },
  //     {
  //       id: 4,
  //       userName: "Ayush Veerban",
  //       userProfile: require("../assets/users/user2.jpg"),
  //       messageTime: "1 mins ago",
  //       messageText: "Hey there, I'm using Reel It Chatbot",
  //     },
  //     {
  //       id: 5,
  //       userName: "vinay choithani",
  //       userProfile: require("../assets/users/user1.jpg"),
  //       messageTime: "Just Now",
  //       messageText: "Hey there, I'm using Reel It Chatbot",
  //     },
  //     {
  //       id: 6,
  //       userName: "sindhu kukreja",
  //       userProfile: require("../assets/users/user2.jpg"),
  //       messageTime: "1 mins ago",
  //       messageText: "Hey there, I'm using Reel It Chatbot",
  //     },
  //     {
  //       id: 7,
  //       userName: "anusha kingrani",
  //       userProfile: require("../assets/users/user1.jpg"),
  //       messageTime: "Just Now",
  //       messageText: "Hey there, I'm using Reel It Chatbot",
  //     },
  //     {
  //       id: 8,
  //       userName: "nancy kingrani",
  //       userProfile: require("../assets/users/user2.jpg"),
  //       messageTime: "1 mins ago",
  //       messageText: "Hey there, I'm using Reel It Chatbot",
  //     },
  //     {
  //       id: 9,
  //       userName: "aman",
  //       userProfile: require("../assets/users/user1.jpg"),
  //       messageTime: "Just Now",
  //       messageText: "Hey there, I'm using Reel It Chatbot",
  //     }
  // ];


  return (
    <View style={styles.mainContainer}>
      <View style= {styles.header}>
        <Text style={styles.chattxt}>Chats</Text>
      </View>
      <View style={styles.searchBar}>
        <TouchableOpacity>
      <MaterialIcons
                name="search"
                size={33}
                color="gray"
                
                
              />
            </TouchableOpacity>
            <TextInput style={ styles.searchInput} placeholder="Search"/>
      </View>
        <ScrollView>
            {chatList.map(chat => (
                <TouchableOpacity style={styles.userContainer} onPress={()=>navigation.navigate("screen14",{chatId : chat.id ,receiver_id : chat.participant_user_id , name : chat.participant_user_name})} key={chat.id}>
                    <Image source={profileImage} style={styles.profileImage}/>
                    <View style={styles.textContainer}>
                        <Text style={styles.userName}>{chat.participant_user_name}</Text>
                        <Text style={styles.messageTime}>{chat.time}</Text>
                        <Text style={styles.messageText}>{chat.last_message}</Text>
                    </View>
                </TouchableOpacity>
            ))}
        </ScrollView>
      <Lowerbar/>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 15,
    gap:12
   
  },
  userContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
    justifyContent: "center",
  },
  userName: {
    fontSize: 20,
    fontWeight: "500",
    color: 'black'
  },
  messageTime: {
    fontSize: 15,
    color: "#888",
  },
  messageText: {
    fontSize: 16,
  },

header:{
width:responsiveWidth(100),
// backgroundColor:"#9c2bb3",
alignSelf:"center",
justifyContent:"center",
padding:16


},
chattxt:{
  fontSize:30,
  fontWeight:"bold",
  color:"black",
  textTransform:"capitalize"
},
searchBar:{
  // backgroundColor:"red",
  width:responsiveWidth(95),
  padding:8,
  paddingHorizontal:16,
  alignSelf:"center",
  backgroundColor: 'rgba( 155, 155, 155, 0.1 )',
  shadowColor: 'rgba(31, 38, 135, 0.37)',
  shadowOffset: { width: 0, height: 8 },
  shadowRadius: 32,
  shadowOpacity: 1,
  borderRadius: 10,
  borderWidth: 1,
  borderColor: 'rgba(255, 255, 255, 0.18)',
  overflow: 'hidden',
  alignItems:"center",
  // justifyContent:"center",
  flexDirection:"row",
  gap:16,

},
searchInput:{
  fontSize:20,
}
});

export default UserScreen;