import React, { useState, useCallback, useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { GiftedChat, Bubble } from 'react-native-gifted-chat';

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

      const changeBubble = props => {
        return(
          <Bubble
          {...props}
          wrapperStyle = {{
            right: {
              backgroundColor:'transparent',
              borderBottomWidth: 0.5,
              borderColor: 'gray',
              borderRadius:16
            } 
          }}
          />
        );
      }
      
  return (
  <View style={style.container}>
    <View style={style.commentHeader}>
      <Text style={style.commentText}>Comments</Text>
    </View>
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
      flexDirection: 'column',
      gap: 4
    },

    userName:{
      color: 'black',
      fontSize: 15
    },

    messageText:{
      color: 'black',
      fontSize: 16
    },

    commentHeader:{
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'white',
      paddingVertical:24,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 3,
      },
      shadowOpacity: 0.1,
      shadowRadius: 30,
      elevation: 8,
    },
    
    commentText:{
      fontSize: 20,
      fontWeight: 'bold'
    }
})
export default Comment;