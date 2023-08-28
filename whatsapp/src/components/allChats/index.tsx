import { useState } from "react";
import { Chats } from "./Chats";
import { Search } from "./Search";
import { Section, Header, Icons, FuncIcons, Profile,
        AddIcon, ChatIcon, BulbIcon, MoreIcon
} from "./styles";

import { format, isThisWeek, isToday } from "date-fns"
import { AddChatForm } from "./addChatForm";

interface ChatType {
    id: number;
    name: string;
    img: string
    message: string;
    date: Date;
}


export function AllChats() {
    const [chats, setChats] = useState<ChatType[]>([])
    const [showAddChatForm, setShowAddChatForm] = useState(false)

    function handleShowAddForm() {
      showAddChatForm ? setShowAddChatForm(false) : setShowAddChatForm(true)
    }

    const addChat = (chatName: string) => {
        const newChat = {
            id: chats.length + 1,
            name: chatName,
            img: "https://avatars.githubusercontent.com/u/31549323?v=4",
            message: "",
            date: new Date(),
        };
        setShowAddChatForm(false)
        setChats([...chats, newChat]);
    }
    return (
        <Section>
          {!showAddChatForm ? (
          <>
          <Header>
              <Icons>
                  <Profile>
                      <img src="https://avatars.githubusercontent.com/u/89949017?v=4"></img>
                  </Profile>
                  <FuncIcons>
                      <AddIcon size={24} color="var(--silver-500)" onClick={() => handleShowAddForm()} />
                      <ChatIcon size={24} color="var(--silver-500)"/>
                      <BulbIcon size={24} color="var(--silver-500)"/>
                      <MoreIcon size={24} color="var(--silver-500)"/>
                  </FuncIcons>
              </Icons>
          </Header>
          <Search />
          {chats.map((chat) => (
            <Chats key={chat.id}
              id={chat.id}
              name={chat.name}
              img={chat.img}
              message={chat.message}
              date={
                isToday(chat.date) // Check if the date is today
                ? format(chat.date, 'HH:mm') // Display hour if today
                : isThisWeek(chat.date) // Check if the date is within the current week
                ? format(chat.date, 'iii') // Display weekday if this week
                : format(chat.date, 'yyyy-MM-dd')
              } // Display full date if not today or this week}
            />
          ))}
          </>
          ) : (
            <AddChatForm 
              addChat={addChat}
              handleShowAddForm={handleShowAddForm}
            />
          )}
        </Section>

    )
}