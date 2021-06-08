import {useEffect, useRef, useState} from 'react';
import socketIOClient from 'socket.io-client';
import {BASE_URL_ROOT} from '@env';

const NEW_CHAT_MESSAGE_EVENT = 'newChatMessage';

export const useChat = roomId => {
  const [messages, setMessages] = useState([]);
  const socketRef = useRef();

  useEffect(() => {
    socketRef.current = socketIOClient(BASE_URL_ROOT, {
      query: {roomId},
    });

    socketRef.current.on(NEW_CHAT_MESSAGE_EVENT, newMessage => {
      setMessages(oldMessage => [...oldMessage, newMessage]);
    });

    return () => {
      socketRef.current.disconnect();
    };
  }, [roomId]);

  const sendMessage = message => {
    socketRef.current.emit(NEW_CHAT_MESSAGE_EVENT, message);
  };

  return {messages, sendMessage, setMessages};
};
