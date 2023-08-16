import styled from "styled-components"
import { AiFillEdit, AiFillCheckSquare, AiFillDelete } from 'react-icons/ai'


export const TaskContainer = styled.section`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    width: 90%;

    h1 {
        text-align: center;
        margin-bottom: 0.5rem;
    }
`

export const Task = styled.div`
    width: auto;
    border: 1px solid #ccc;
    border-radius: 4px;
    display: flex;
    justify-content: space-between;
    padding: 1rem;
`

export const TaskName = styled.div`
    font-weight: 500;
`

export const Actions = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
`

export const CheckSquare = styled(AiFillCheckSquare)`
   color: green;
`
export const EditButton = styled(AiFillEdit)`
   color: #F7CA18;
`
export const DeleteButton = styled(AiFillDelete)`
   color: red;
`