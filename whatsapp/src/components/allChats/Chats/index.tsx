import { useState } from "react";
import { Section, Chat, ChatIcon, ChatName, ChatMessage, ChatInfo } from "./styles";

export interface PropsType {
    id: number;
    name: string;
    img: string
    message: string;
    date: string;
    onChatClick: (chatData: PropsType) => void; // Add onChatClick to the props

}

export function Chats(props: PropsType) {
    // const [selectedChat, setSelectedChat] = useState('')

    const handleOpenChat = () => {
        props.onChatClick(props); // Call the provided onChatClick function and pass props
    }

    return (
        <Section>
            <Chat onClick={handleOpenChat}>
                <ChatIcon>
                    <img src={props.img}></img>
                </ChatIcon>
                <ChatInfo>
                <ChatName>
                    <span>{props.name}</span>
                    <span className="time">{props.date}</span>
                </ChatName>
                <ChatMessage>
                    <span>{props.message}</span>
                    <p></p>
                </ChatMessage>
                </ChatInfo>
            </Chat>
        </Section>
    )
}