import { Section, Chat, ChatIcon, ChatName, ChatMessage, ChatInfo } from "./chatsStyles";


export function Chats() {
    return (
        <Section>
            <Chat>
                <ChatIcon>
                    <img src="https://avatars.githubusercontent.com/u/31549323?v=4"></img>
                </ChatIcon>
                <ChatInfo>
                <ChatName>
                    <span>Heisen</span>
                    <span className="time">10:03 PM</span>
                </ChatName>
                <ChatMessage>
                    <span>oi, tudo bem?</span>
                    <p></p>
                </ChatMessage>
                </ChatInfo>
            </Chat>
        </Section>
    )
}