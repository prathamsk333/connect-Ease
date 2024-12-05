'use client';
import { useState, useEffect } from 'react';
import { StreamChat } from 'stream-chat';
import { Chat, Channel, ChannelHeader, MessageInput, MessageList, Thread, Window } from 'stream-chat-react';
import type { User, Channel as StreamChannel } from 'stream-chat';

import 'stream-chat-react/dist/css/v2/index.css';
import './layout.css';

const apiKey = process.env.NEXT_PUBLIC_CHAT_API_KEY || "";

const ChatPage = () => {
  const [channel, setChannel] = useState<StreamChannel>();
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [chatClient, setChatClient] = useState<any>(null);

  useEffect(() => {
    const initializeUser = async () => {
      try {
        const response = await fetch('/api/generate-token');
        const { token, userId, userName } = await response.json();

        const user: User = {
          id: userId,
          name: userName,
          role: 'admin', 
          image: `https://getstream.io/random_png/?name=${userName}`,
        };
        
        const client = new StreamChat(apiKey);
        await client.connectUser(user, token);
        setCurrentUser(user);
        setChatClient(client);

        const newChannel = client.channel('messaging', 'unique_chat_channel', {
          image: 'https://getstream.io/random_png/?name=react',
          name: 'Talk about React',
          created_by: user,
          members: [userId],
        });

        await newChannel.create();
        await newChannel.watch();
        setChannel(newChannel);
      } catch (error) {
        console.error('Chat initialization error:', error);
      }
    };

    initializeUser();

    return () => {
      if (chatClient) {
        chatClient.disconnectUser();
      }
    };
  }, []);

  const clearChat = async () => {
    if (channel) {
      try {
        await channel.truncate();
        console.log('All chats cleared!');
      } catch (error) {
        console.error('Error clearing chats:', error);
      }
    }
  };

  if (!chatClient || !currentUser) return <div>Setting up chat...</div>;

  return (
    <Chat client={chatClient}>
      <Channel channel={channel}>
        <Window>
          <ChannelHeader />
          <button onClick={clearChat} style={{ margin: '10px' }}>Clear All Chats</button>
          <MessageList />
          <MessageInput />
        </Window>
        <Thread />
      </Channel>
    </Chat>
  );
};

export default ChatPage;
