// import { ChatData } from '../allChats';
import { Section, Header, ContactInfo, Icons, Content } from './styles'
import { AiOutlineSearch, AiOutlineMore } from 'react-icons/ai'

export interface PropsType {
  chatData: {
    id: number;
    name: string;
    img: string
    message: string;
    date: string;
  }
}

export function Chat({ chatData }: PropsType) {
  if (!chatData['name']) {
    return <div className='empty-chat'>Select a chat to start chatting</div>;
  }

    return (
      <Section>

        <Header>
          <ContactInfo>
            <img src={chatData.img}></img>
            <p>{chatData.name}</p>
          </ContactInfo>
          <Icons>
            <AiOutlineSearch size={24} />
            <AiOutlineMore size={24} />
          </Icons>
        </Header>

        <Content >
          
        </Content>

      </Section >
    )
}