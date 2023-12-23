import { useContext, useState } from 'react'
import {
  Section,
  Header,
  ContactInfo,
  Icons,
  Content,
  MessageBar,
  MsgIcons,
  Input,
  MessagesContainer,
  MessageInfo,
  Text,
  ViewSymbol,
} from './styles'

import { AiOutlineSearch, AiOutlineMore, AiOutlinePlus } from 'react-icons/ai'
import { BsEmojiSmile, BsMicFill } from 'react-icons/bs'
import { MdSend } from 'react-icons/md'

import { ChatsContext, Messages } from '../../contexts/ChatsContext'
import { EmptyChatContainer } from './EmptyChatContainer'

export function Chat() {
  const { chats, selectedChat } = useContext(ChatsContext)

  const currentChat = chats.find((chat) => chat.id === selectedChat?.id)

  const [currentText, setCurrentText] = useState('')

  const [messages, setMessages] = useState<Messages[]>(
    currentChat?.message || [],
  )

  function handleSendMessage() {
    setMessages([
      ...messages,
      {
        sender: 1,
        text: currentText,
        chatId: currentChat?.id || 0,
        date: new Date(),
      },
    ])
    setCurrentText('')
  }

  if (!currentChat?.name) {
    return <EmptyChatContainer />
  }
  return (
    <Section>
      <Header>
        <ContactInfo>
          <img src={currentChat.img} alt="profile picture"></img>
          <p>{currentChat.name}</p>
        </ContactInfo>
        <Icons>
          <AiOutlineSearch size={24} />
          <AiOutlineMore size={24} />
        </Icons>
      </Header>

      <Content>
        <div>
          {messages.map((message) => {
            if (message.chatId === currentChat.id) {
              return (
                <MessagesContainer key={message.date.toISOString()}>
                  <Text>
                    <p>{message.text}</p>
                    <MessageInfo>
                      <time>
                        {message.date.toLocaleTimeString('en-US', {
                          hour: '2-digit',
                          minute: '2-digit',
                          hour12: true,
                        })}
                      </time>
                      <ViewSymbol />
                    </MessageInfo>
                  </Text>
                  {/* <MessageInfo>
                    <time>{message.date.toDateString()}</time>
                    <ViewSymbol />
                  </MessageInfo> */}
                </MessagesContainer>
              )
            } else {
              return null
            }
          })}
        </div>

        <MessageBar>
          <MsgIcons>
            <BsEmojiSmile size={24} />
            <AiOutlinePlus size={24} />
          </MsgIcons>

          <Input>
            <input
              type="text"
              placeholder="Type a message"
              value={currentText}
              onChange={(e) => setCurrentText(e.target.value)}
            />
          </Input>
          {currentText ? (
            <MdSend size={24} color={'#54656f'} onClick={handleSendMessage} />
          ) : (
            <BsMicFill size={24} color={'#54656f'} />
          )}
        </MessageBar>
      </Content>
    </Section>
  )
}
