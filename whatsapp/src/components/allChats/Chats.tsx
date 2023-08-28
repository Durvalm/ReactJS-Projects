import { Section, Chat, ChatIcon, ChatName, ChatMessage, ChatInfo } from "./chatsStyles";

interface PropsType {
    id: number;
    name: string;
    img: string
    message: string;
    date: string;
}

export function Chats(props: PropsType) {
    return (
        <Section>
            <Chat>
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