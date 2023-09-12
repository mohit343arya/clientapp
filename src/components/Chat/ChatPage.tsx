import React from 'react';
import ChatList from './ChatList';
import ChatBox from './ChatBox';

const ChatPage = () => {
  return (
    <div className="chat-page">
      <ChatList />
      <ChatBox />
    </div>
  );
};