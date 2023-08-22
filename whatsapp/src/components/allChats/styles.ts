import { styled } from "styled-components";
import { AiFillPlusCircle, AiFillBulb, AiOutlineMore, AiFillWechat } from 'react-icons/ai'


export const Section = styled.section`
  border-right: 0.5px black solid;
`

export const Header = styled.div`
  height: auto;
  background-color: #f0f2f5;
`

export const Icons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0.7rem 1rem;
`

export const Profile = styled.div`
  display: flex;
  align-items: center;
  height: 2rem;

  img {
    height: 2.5rem;
    width: 2.5rem;
    border-radius: 9999px;
  }
`

export const FuncIcons = styled.div`
  display: flex;
  gap: 1.5rem;

`

const BaseFuncIcons = styled.div`
  height: 4rem;
  background-color: white;
  padding: 1rem;

`

export const AddIcon = styled(AiFillPlusCircle)`
  ${BaseFuncIcons}
  background-color: #3b4a54;
`
export const BulbIcon = styled(AiFillBulb)`
  ${BaseFuncIcons}
`
export const ChatIcon = styled(AiFillWechat)`
  ${BaseFuncIcons}
`
export const MoreIcon = styled(AiOutlineMore)`
  ${BaseFuncIcons}
`