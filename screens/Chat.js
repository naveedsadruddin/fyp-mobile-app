import React from 'react';
import {useState, useEffect} from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Bubble, GiftedChat, Send} from 'react-native-gifted-chat';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  ScrollViewBase,
} from 'react-native';
import {
  responsiveHeight,
  responsiveFontSize,
  responsiveWidth,
  responsiveScreenFontSize,
} from 'react-native-responsive-dimensions';
import ChatHeader from './ChatHeader';
import { useSelector } from 'react-redux';
import { io } from 'socket.io-client';
import axios from 'axios';
const socket = io('http://13.49.252.90:4000');
const Chat = ({route}) => {
  const userId  =  useSelector(state => state.user.userData.user.id);
  const {name , chatId, receiver_id} = route.params;
  const [messages, setMessages] = useState([]);
  const setMessages1 = () => {
  axios.get(`http://13.49.252.90:4000/app/messages/${chatId}`)
  .then((response) => {
    console.log(response.data , 'here')
    const transformedMessages = response.data.map(msg => ({
      _id: msg.id,
      text: msg.message,
      createdAt: new Date(msg.createdAt),
      user: {
        _id: msg.sender_id,
      }
    }));
    setMessages(transformedMessages)
    console.log(messages)
  })
  .catch((error) => {

  });

}
  // useEffect(() => {
  //   setMessages1()
  //   socket.on(`receiveMessage-${chatId}`, (newMessage) => { 
  //     const newMessages ={
  //                 _id: Math.round(Math.random() * 1000000),
  //                 text: newMessage.message,
  //                 createdAt: newMessage.date,
  //                 user: {
  //                   _id: newMessage.sender_id,
  //                 },
  //               };
  //     setMessages(previousMessages =>
  //    GiftedChat.append(previousMessages, newMessages),
  //    );
  // });
  // }, []);
  useEffect(() => {

    setMessages1();

    const handleReceiveMessage = (newMessage) => {
      const newMessages = {
        _id: Math.round(Math.random() * 1000000),
        text: newMessage.message,
        createdAt: new Date(newMessage.date),
        user: {
          _id: newMessage.sender_id,
        },
      };
      setMessages(previousMessages =>
        GiftedChat.append(previousMessages, newMessages),
      );
    };

    socket.on(`receiveMessage-${chatId}`, handleReceiveMessage);

    // Cleanup function to remove the event listener
    return () => {
      socket.off(`receiveMessage-${chatId}`, handleReceiveMessage);
    };
  }, [chatId]);

  useEffect(() => {
    console.log("here")
    axios.get(`http://13.49.252.90:4000/app/messages/${chatId}`)
    .then((response) => {
      console.log(response.data , 'chatId', chatId)
      const transformedMessages = response.data.map(msg => ({
        _id: msg.id,
        text: msg.message,
        createdAt: new Date(msg.createdAt),
        user: {
          _id: msg.sender_id,
        }
      }));
      setMessages(transformedMessages)
      console.log(messages)  
    })  .catch({

    })
  }, []);

  const onSend = (newMessages = []) => {
    console.log(newMessages)
    socket.emit('sendMessage', { sender_id: userId, receiver_id: receiver_id, message : newMessages[0].text });
  };
  const changeBubble = props => {
    return (
      <Bubble
        {...props}
        wrapperStyle={{
          right: {backgroundColor: '#9c2bb3'},
        }}
      />
    );
  };
  const changeSend = props => {
    return (
      <Send {...props}>
        <View style={style.sendbtn}>
          <MaterialCommunityIcons name="send" size={25} color="white" />
        </View>
      </Send>
    );
  };

  return (
    <>
      <ChatHeader name={name} />

      <GiftedChat
        renderBubble={changeBubble}
        alwaysShowSend
        renderSend={changeSend}
        scrollToBottom
        textInputProps={{
          style: {
            fontSize: 18,
            width: '85%',
            paddingHorizontal: 20,
          },
        }}
        messages={messages}
        onSend={newMessages => onSend(newMessages)}
        user={{
          _id: userId,
         
        }}  
      />
    </>
  );
};
const style = StyleSheet.create({
  sendbtn: {
    width: 45,
    height: 45,
    backgroundColor: '#9c2bb3',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
    marginHorizontal: 10,
  },
});

export default Chat;
