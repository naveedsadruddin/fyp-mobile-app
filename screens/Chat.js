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
const Chat = ({route}) => {
  const {data} = route.params;
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'Hello! How can I assist you?',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: "React Native Bot",
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
    ]);
  }, []);

  const onSend = (newMessages = []) => {
    setMessages(previousMessages =>
      GiftedChat.append(previousMessages, newMessages),
    );

    // Simulate bot response after 1 second
    setTimeout(() => {
      setMessages(previousMessages =>
        GiftedChat.append(previousMessages, [
          {
            _id: Math.round(Math.random() * 1000000),
            text: 'This is a mock response.',
            createdAt: new Date(),
            user: {
              _id: 2,
              name: "React Native Bot",
              avatar: 'https://placeimg.com/140/140/any',
            },
          },
        ]),
      );
    }, 1000);
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
      <ChatHeader user={data} />

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
          _id: 1,
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
