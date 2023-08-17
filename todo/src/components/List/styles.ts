import styled, { css } from "styled-components"
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

    > p {
        text-align: center;
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

export const TaskName = styled.div<{ completed: boolean }>`
    font-weight: 500;

    p {
        ${props => props.completed && css`
        text-decoration: line-through;
        `}
    }
`

export const TaskEdit = styled.div`
    width: 90%;
    display: flex;
    gap: 0.5rem;

    input {
        width: 100%;
    }
    button {
        background-color: #48929B;
        color: white;
        border: none;
        border-radius: 4px;
        padding: 0.25rem;
    }
`

export const Actions = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
`

const BaseIcon = css`
   cursor: pointer;
    &:hover {
        opacity: 0.8;
    }
`

export const CheckSquare = styled(AiFillCheckSquare)`
   ${BaseIcon}
   color: green;
`
export const EditButton = styled(AiFillEdit)`
   ${BaseIcon}
   color: #F7CA18;
`
export const DeleteButton = styled(AiFillDelete)`
   ${BaseIcon}
   color: red;
`