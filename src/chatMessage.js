
import React from 'react';
import { List, ListItem, ListItemText } from '@mui/material';
import messageData from './message.json'

const ChatMessages = () => {
  const { messages } = messageData;

  return (
    <List>
      {messages.map((message) => (
        <ListItem key={message.id}>
          <ListItemText
            primary={message.text}
            primaryTypographyProps={{ align: message.sender === 'user' ? 'right' : 'left' }}
          />
        </ListItem>
      ))}
    </List>
  );
};

export default ChatMessages;
