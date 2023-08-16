import { ToDoContainer, InputForm, Button } from  "./styles"
import { FaBeer } from 'react-icons/fa'

export function Header() {
    return (
        <>
        <h1>Todo List</h1>
            <form action="">       
            <ToDoContainer>  
            <InputForm>
                <FaBeer />
                <input type="text" placeholder="Enter Task"></input>
            </InputForm>
            <Button type="submit">Add new task</Button>
            </ToDoContainer>
            </form> 
        </>
    )
}