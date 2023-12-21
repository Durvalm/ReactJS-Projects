import { ReactNode, createContext, useState } from 'react'

export interface Messages {
  sender: 1 | 2
  text: string
}

export interface ChatType {
  id: number
  name: string
  img: string
  message: Messages[]
  date: Date
}

interface SelectedChatType {
  id: number
}

interface ChatsContextType {
  chats: ChatType[]
  selectedChat?: SelectedChatType
  createChats: (newChat: ChatType) => void
  selectCurrentChat: (chatId: number) => void
  // updateChatMessages: (currentChat: ChatType, newMessage: string)
}

interface ChatsContextProviderProps {
  children: ReactNode
}

export const ChatsContext = createContext({} as ChatsContextType)

export function ChatsContextProvider({ children }: ChatsContextProviderProps) {
  const [chats, setChats] = useState<ChatType[]>([])

  const [selectedChat, setSelectedChat] = useState<SelectedChatType>()

  // function updateChatMessages(currentChat: ChatType, newMessage: string) {
  //   const chatIndex = chats.findIndex((chat) => chat.id === currentChat.id);

  //   if (chatIndex !== -1) {
  //     const updatedChat = {
  //       ...chats[chatIndex],
  //       message: [...chats[chatIndex].message, { text: newMessage, sender: 1 }],
  //       date: new Date(),
  //     };

  //     setChats((chats) => {
  //       return (
  //         [...chats, updatedChat]
  //       )
  //     });
  //   }
  // }

  function createChats(newChat: ChatType) {
    setChats([...chats, newChat])
  }

  function selectCurrentChat(chatId: number) {
    setSelectedChat({ id: chatId })
  }

  return (
    <ChatsContext.Provider
      value={{
        chats,
        createChats,
        selectedChat,
        selectCurrentChat /* updateChatMessages */,
      }}
    >
      {children}
    </ChatsContext.Provider>
  )
}
