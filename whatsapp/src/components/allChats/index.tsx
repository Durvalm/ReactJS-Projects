import { useState } from "react";
import { Chats } from "./Chats";
import { Search } from "./Search";
import { Section, Header, Icons, FuncIcons, Profile,
        AddIcon, ChatIcon, BulbIcon, MoreIcon
} from "./styles";

export interface ChatType {
    id: number;
    name: string;
    img: string
    message: string;
    date: Date;
}


export function AllChats() {
    // const [chats, setChats] = useState<ChatType[]>([])
    return (
        <Section>
        <Header>
            <Icons>
                <Profile>
                    <img src="https://avatars.githubusercontent.com/u/89949017?v=4"></img>
                </Profile>
                <FuncIcons>
                    <AddIcon size={24} color="var(--silver-500)"/>
                    <ChatIcon size={24} color="var(--silver-500)"/>
                    <BulbIcon size={24} color="var(--silver-500)"/>
                    <MoreIcon size={24} color="var(--silver-500)"/>
                </FuncIcons>
            </Icons>
        </Header>
        <Search />
        {/* {chats.map((chat) => (
            <Chats key={chat.id} name={chat.name}  />
        ))} */}
        <Chats />
        </Section>
    )
}