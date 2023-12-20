import { useContext, useState } from 'react';
import { Section, Header, ContactInfo, Icons,
          Content, MessageBar, MsgIcons, Input, Microphone 
} from './styles'
import { AiOutlineSearch, AiOutlineMore } from 'react-icons/ai'
import { ChatsContext, Messages } from '../../contexts/ChatsContext';


export function Chat() {
  const { chats, selectedChat } = useContext(ChatsContext)

  const currentChat = chats.find((chat) => chat.id === selectedChat?.id);

  const [messages, setMessages] = useState<Messages[]>(currentChat?.message || [])

  if (!currentChat?.name) {
    return <div className='empty-chat'>Select a chat to start chatting</div>;
  }

    return (
      <Section>

        <Header>
          <ContactInfo>
            <img src={currentChat.img}></img>
            <p>{currentChat.name}</p>
          </ContactInfo>
          <Icons>
            <AiOutlineSearch size={24} />
            <AiOutlineMore size={24} />
          </Icons>
        </Header>

        <Content >
          {messages.map((message) => (
            <p>{message.text}</p>
          ))}
        </Content>

        <MessageBar>
          <MsgIcons></MsgIcons>
          <Input></Input>
          <Microphone />
        </MessageBar>

      </Section >
    )
}