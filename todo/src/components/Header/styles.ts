import styled from 'styled-components'

export const HeaderContainer = styled.section`
    height: 100vh;
    margin: 3rem 3rem;
    padding: 1rem 0;
    background: white;
    display: flex;
    flex-direction: column;
    align-items: center;

    h1 {
        font-weight: bold;
    }

    form {
        width: 90%;
    }

`

export const ToDoContainer = styled.div`
    width: auto;
    border: 1px solid #ccc;
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 1.5rem;
    margin: 1rem 0;
    gap: 0.5rem;
`

export const InputForm = styled.div`
    display: flex;
    align-items: center;
    vertical-align: middle;
    gap: 0.5rem;
    width: auto;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 0.5rem;
    line-height: 1.6;

    input {
        border: none;
        width: 80%;
        outline: none;
    }
`

export const Button = styled.button`
    width: auto;
    background-color: #48929B;
    color: white;
    border: none;
    border-radius: 4px;
    padding: 0.5rem;
`