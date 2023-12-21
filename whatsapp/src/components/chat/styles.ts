import styled from 'styled-components'

export const Section = styled.section`
  width: 100%;
  overflow: hidden;
`

export const Header = styled.div`
  height: 3.7rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f0f2f5;
  padding: 0.7rem 1rem;
`

export const ContactInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  img {
    height: 2.5rem;
    width: 2.5rem;
    border-radius: 9999px;
  }

  p {
    color: #111b21;
    font-size: 16px;
  }
`

export const Icons = styled.div`
  display: flex;
  gap: 1rem;
  color: #54656f;
`

export const Profile = styled.div`
  height: 2rem;

  img {
    height: 2.5rem;
    width: 2.5rem;
    border-radius: 9999px;
  }
`

export const Content = styled.div`
  height: calc(100vh - 3.5rem);
  border-left: 0.5px solid #e9edef;
  background-image: url('https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png');
  background-size: 50%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const MessagesContainer = styled.div``

export const MsgIcons = styled.div`
  display: flex;
  gap: 1rem;
  color: #54656f;
`

export const MessageBar = styled.div`
  height: 3.7rem;
  background-color: #f0f2f5;

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  padding: 0.7rem 1.5rem;
`

export const Input = styled.div`
  display: flex;
  flex: 1;

  input {
    border: none;
    width: 100%;
    padding: 0.7rem;
    border-radius: 8px;
    outline: none;
  }
`
