import { format, isThisWeek, isToday } from 'date-fns'
import { ChatType, ChatsContext } from '../../../contexts/ChatsContext'
import {
  Section,
  Chat,
  ChatIcon,
  ChatName,
  ChatMessage,
  ChatInfo,
} from './styles'
import { useContext } from 'react'

export function Chats(chat: ChatType) {
  const { selectCurrentChat, selectedChat } = useContext(ChatsContext)

  const handleChatClick = () => {
    selectCurrentChat(chat.id)
  }

  return (
    <Section>
      <Chat onClick={handleChatClick} isSelected={chat.id === selectedChat?.id}>
        <ChatIcon>
          <img src={chat.img} alt="Profile Picture"></img>
        </ChatIcon>
        <ChatInfo>
          <ChatName>
            <span>{chat.name}</span>
            <span className="time">
              {isToday(chat.date) // Check if the date is today
                ? format(chat.date, 'HH:mm') // Display hour if today
                : isThisWeek(chat.date) // Check if the date is within the current week
                  ? format(chat.date, 'iii') // Display weekday if this week
                  : format(chat.date, 'yyyy-MM-dd')}
            </span>
          </ChatName>
          <ChatMessage>
            {/* <span>{props.message}</span> last message */}
            <span></span>
            <p></p>
          </ChatMessage>
        </ChatInfo>
      </Chat>
    </Section>
  )
}
