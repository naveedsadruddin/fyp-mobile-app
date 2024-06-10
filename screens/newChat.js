import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, Image, ScrollView, TouchableOpacity, TextInput } from "react-native";
import { responsiveWidth, responsiveHeight } from "react-native-responsive-dimensions";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import axios from "axios";


const NewChat = () => {

    const navigation = useNavigation();
    const profileImage = require("../assets/users/user1.jpg");
    const [username, setUsername] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const searchApi = () => {
        axios.post(`http://13.49.252.90:4000/search-user`, { username: username })
          .then((response) => {
            setSearchResults(response.data);
          })
          .catch((error) => {
            console.error(error);
          });
      };
    

  return (
    <View style={styles.mainContainer}>
      <View style={styles.header}>
        <Ionicons name="chevron-back-sharp" size={40} color="black" />
        <Text style={styles.chattxt}>New Chats</Text>
      </View>

      <View style={styles.searchBar}>
        <TouchableOpacity onPress={() => navigation.navigate("screen13")}>
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
        {searchResults.map(chat => (
        <TouchableOpacity
            style={styles.userContainer}
            key={chat.id}
        >
            <Image source={profileImage} style={styles.profileImage} />
            <View style={styles.textContainer}>
                <Text style={styles.userName}>{chat.name}</Text>
            </View>
        </TouchableOpacity>
        ))}
      </ScrollView>
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
    flexDirection: 'row',
    alignSelf: "center",
    gap: 8,
    padding: 16
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

export default NewChat;
