
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
  const [selectedChat, setSelectedChat] = useState<PropsType>({
    id: 0,
    name: '',
    img: '',
    message: '',
    date: '',
  });

  const handleChatClick = (chatData: PropsType) => {
    setSelectedChat(chatData);
  };

  return (
    <main className='wrapper'>
      <AllChats onChatClick={handleChatClick} />
      <Chat chatData={selectedChat} />
      {/* {selectedChat !== null ? <Chat chatData={selectedChat} /> : null} */}
    </main>
  )
}
 
export default App
