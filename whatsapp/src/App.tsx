
import { AllChats } from './components/allChats'
import { Chat } from './components/chat'
import { PropsType } from './components/allChats/Chats';

import './App.css'
import { useState } from 'react';


function App() {
  const [selectedChat, setSelectedChat] = useState(null);

  const handleChatClick = (chatData: PropsType) => {
    setSelectedChat(chatData);
  };

  return (
    <main className='wrapper'>
      <AllChats onChatClick={handleChatClick} />
      <Chat chatData={selectedChat} />
    </main>
  )
}
 
export default App
