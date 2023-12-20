import { ReactNode, createContext, useState } from "react";

interface ChatsContextProviderProps {
    children: ReactNode
  }

export interface Messages {
    sender: 1 | 2
    text: string
  }

export interface ChatType {
    id: number;
    name: string;
    img: string
    message: Messages[];
    date: Date;
}

interface SelectedChatType {
    id: number 
}

interface ChatsContextType {
    chats: ChatType[]
    selectedChat?: SelectedChatType
    createChats: (newChat: ChatType) => void
    selectCurrentChat: (chatId: number) => void
}

export const ChatsContext = createContext({} as ChatsContextType)

export function ChatsContextProvider({children,}:ChatsContextProviderProps) {
    const [chats, setChats] = useState<ChatType[]>([])

    const [selectedChat, setSelectedChat] = useState<SelectedChatType>();

    function createChats(newChat: ChatType) {
        setChats([...chats, newChat])
    }

    function selectCurrentChat(chatId: number) {
        setSelectedChat({ id: chatId })
    }

    return (
        <ChatsContext.Provider value={{chats, createChats, selectedChat, selectCurrentChat}}>{children}

        </ChatsContext.Provider>
    )
}