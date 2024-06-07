import React, { useState } from 'react';
import { GiftedChat } from 'react-native-gifted-chat';
import { View, StyleSheet } from 'react-native';
const Abc = () => {
  const [messages, setMessages] = useState([]);

  // Mock data for demonstration
  const mockMessages = [
    {
      _id: 1,
      text: 'Hello!',
      createdAt: new Date(),
      user: { _id: 2, name: 'John Doe' }, // Sample user with a name
    },
    // Add more messages as needed
  ];

  const onSend = (newMessages = []) => {
    setMessages((prevMessages) => GiftedChat.append(prevMessages, newMessages));
  };

  return (
    <View style={styles.container}>
      <GiftedChat
        messages={messages}
        onSend={onSend}
        user={{ _id: 2 }} // Specify the current user
        renderUsername={(props) => (
          <Text style={styles.username}>{props.currentMessage.user.name}</Text>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  username: {
    fontWeight: 'bold',
    marginBottom: 2,
  },
});

export default Abc;