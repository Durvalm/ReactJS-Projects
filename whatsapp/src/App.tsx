
import { AllChats } from './components/allChats'
import { Chat } from './components/chat'

import './App.css'
import { useState } from 'react';

export interface PropsType {
    id: number;
    name: string;
    img: string
    message: string;
    date: string;
}

function App() {
  const [selectedChat, setSelectedChat] = useState<PropsType | null>(null);

  const handleChatClick = (chatData: PropsType) => {
    setSelectedChat(chatData);
  };

  return (
    <main className='wrapper'>
      <AllChats onChatClick={handleChatClick} />
      {selectedChat !== null ? <Chat chatData={selectedChat} /> : null}
    </main>
  )
}
 
export default App
