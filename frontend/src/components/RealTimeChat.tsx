import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { io, Socket } from 'socket.io-client';

const ChatContainer = styled.div`
  background: white;
  border-radius: 15px;
  padding: 1.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const MessageList = styled.div`
  max-height: 300px;
  overflow-y: auto;
  margin-bottom: 1rem;
`;

const MessageItem = styled.div`
  padding: 0.5rem;
  border-bottom: 1px solid #eee;
`;

const MessageInput = styled.input`
  width: calc(100% - 100px);
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const SendButton = styled.button`
  padding: 0.5rem 1rem;
  border: none;
  background: ${props => props.theme.colors.primary};
  color: white;
  border-radius: 5px;
  cursor: pointer;
`;

interface RealTimeChatProps {
  roomId: string;
}

function RealTimeChat({ roomId }: RealTimeChatProps) {
  const [messages, setMessages] = useState<string[]>([]);
  const [newMessage, setNewMessage] = useState('');
  const [socket, setSocket] = useState<Socket | null>(null);

  useEffect(() => {
    const newSocket = io(process.env.REACT_APP_WS_URL || '');
    setSocket(newSocket);

    newSocket.emit('join-room', roomId);

    newSocket.on('chat-message', (message: string) => {
      setMessages(prev => [...prev, message]);
    });

    return () => {
      newSocket.disconnect();
    };
  }, [roomId]);

  const sendMessage = () => {
    if (newMessage.trim()) {
      socket?.emit('chat-message', newMessage);
      setNewMessage('');
    }
  };

  return (
    <ChatContainer>
      <h3>Real-Time Chat</h3>
      <MessageList>
        {messages.map((msg, index) => (
          <MessageItem key={index}>{msg}</MessageItem>
        ))}
      </MessageList>
      <div style={{ display: 'flex' }}>
        <MessageInput
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Type a message..."
        />
        <SendButton onClick={sendMessage}>Send</SendButton>
      </div>
    </ChatContainer>
  );
}

export default RealTimeChat; 