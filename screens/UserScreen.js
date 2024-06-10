import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, Image, ScrollView, TouchableOpacity, TextInput } from "react-native";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { responsiveWidth } from "react-native-responsive-dimensions";
import { useNavigation } from '@react-navigation/native';
import Lowerbar from './Lowerbar';
import { useSelector } from "react-redux";
import { io } from "socket.io-client";
import axios from "axios";

const socket = io('http://13.49.252.90:4000');

const UserScreen = () => {
  const navigation = useNavigation();
  const userId = useSelector(state => state.user.userData.user.id);
  const profileImage = require("../assets/users/user1.jpg");
  const [chatList, setChatList] = useState([]);
  const [username, setUsername] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const setChatList1 = () => {
    axios.get(`http://13.49.252.90:4000/chat-listing/${userId}`)
      .then((response) => {
        setChatList(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const searchApi = () => {
    axios.post(`http://13.49.252.90:4000/search-user`, { username: username })
      .then((response) => {
        setSearchResults(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const joinChat = () => {
    socket.emit('join', userId);
  };

  useEffect(() => {
    setChatList1();
    joinChat();
    socket.on(`chat-${userId}`, () => {
      setChatList1();
    });
  }, []);

  const filteredChatList = searchResults.length > 0
    ? chatList.filter(chat => searchResults.some(user => user.id === chat.participant_user_id))
    : chatList;

  return (
    <View style={styles.mainContainer}>
      <View style={styles.header}>
        <Text style={styles.chattxt}>Chats</Text>
        <TouchableOpacity onPress={() => navigation.navigate("screen17")}>
          <AntDesign name="pluscircle" size={33} color="#9c2bb3" />
        </TouchableOpacity>
      </View>
      <View style={styles.searchBar}>
        <TouchableOpacity>
          <MaterialIcons name="search" size={33} color="gray" />
        </TouchableOpacity>
        <TextInput
          style={styles.searchInput}
          value={username}
          placeholder="Search"
          onChangeText={(event) => { setUsername(event); searchApi(); }}
        />
      </View>
      <ScrollView>
        {filteredChatList.map(chat => (
          <TouchableOpacity
            style={styles.userContainer}
            onPress={() => navigation.navigate("screen14", { chatId: chat.id, receiver_id: chat.participant_user_id, name: chat.participant_user_name })}
            key={chat.id}
          >
            <Image source={profileImage} style={styles.profileImage} />
            <View style={styles.textContainer}>
              <Text style={styles.userName}>{chat.participant_user_name}</Text>
              <Text style={styles.messageTime}>{chat.time}</Text>
              <Text style={styles.messageText}>{chat.last_message}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
      <Lowerbar />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 15,
    gap: 12
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
  header: {
    width: responsiveWidth(100),
    padding: 16,
    flexDirection: 'row',
    alignItems:'center',
    justifyContent: 'space-between',
  },
  chattxt: {
    fontSize: 30,
    fontWeight: "bold",
    color: "black",
    textTransform: "capitalize"
  },
  searchBar: {
    width: responsiveWidth(95),
    padding: 8,
    paddingHorizontal: 16,
    alignSelf: "center",
    backgroundColor: 'rgba( 155, 155, 155, 0.1 )',
    shadowColor: 'rgba(31, 38, 135, 0.37)',
    shadowOffset: { width: 0, height: 8 },
    shadowRadius: 32,
    shadowOpacity: 1,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.18)',
    overflow: 'hidden',
    alignItems: "center",
    flexDirection: "row",
    gap: 16,
  },
  searchInput: {
    fontSize: 20,
  }
});

export default UserScreen;
