import React, { useState, useCallback, useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';

function Comment() {
    const [messages, setMessages] = useState([])

    const onSend = useCallback((messages = []) => {
        setMessages(previousMessages =>
          GiftedChat.append(previousMessages, messages),
        )
      }, [])

      const CustomMessageText = ({user, currentMessage}) => {
        return(
          <View style={style.bubbleContainer}>
            <Text style={style.userName}>{user.name}</Text>
            <Text style={style.messageText}>{currentMessage.text}</Text>
          </View>
        );
      };

      const renderMessageText = props => {
        return <CustomMessageText {...props}/>
      }

      const changeBubble = props = {
        <Bubble/>
      }
      
  return (
  <View style={style.container}>
   <GiftedChat
      messages={messages}
      onSend={messages => onSend(messages)}
      user={{
        _id: 1,
        name: "laksh.wadhwani55"
      }}
      renderMessageText={renderMessageText}
      renderBubble={changeBubble}
    />
  </View>
  )
}
const style= StyleSheet.create({
    container:{
        flex:1,
    },

    bubbleContainer:{
      paddingHorizontal: 18,
      paddingVertical: 6,
      flexDirection: 'column',
      gap: 8
    },

    userName:{
      color: 'white',
      fontSize: 15
    },

    messageText:{
      color: 'white',
      fontSize: 19
    }
})
export default Comment;