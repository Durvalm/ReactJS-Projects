import styled from "styled-components";


export const Section = styled.section`
  width: 100%;
`

export const Header = styled.div`
  height: 3.5rem;
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
`

export const MsgIcons = styled.div`

`

export const MessageBar = styled.div`

`

export const Input = styled.div`

`

export const Microphone = styled.div`

`