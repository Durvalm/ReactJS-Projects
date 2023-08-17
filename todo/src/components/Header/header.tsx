import { useState } from "react";
import { ToDoContainer, InputForm, Button } from  "./styles"
import { FaBeer } from 'react-icons/fa'
import { TaskType } from "../../App";

interface HeaderProps {
    tasks: TaskType[];
    setTasks: React.Dispatch<React.SetStateAction<TaskType[]>>; 
}

export function Header({ tasks, setTasks }: HeaderProps) {
    const [taskName, setTaskName] = useState<string>("")

    const handleAddTask = (e: React.FormEvent) => {
        e.preventDefault();

        if (taskName.trim() !== '') {
            const newTask = {
                id: tasks.length + 1,
                name: taskName,
                completed: false
            };

            setTasks([...tasks, newTask]);
            setTaskName('');
        }
    };

    return (
        <>
        <h1>Todo List</h1>
            <form onSubmit={handleAddTask}>       
            <ToDoContainer>  
            <InputForm>
                <FaBeer />
                <input 
                    type="text" 
                    placeholder="Enter Task"
                    value={taskName}
                    onChange={(e) => setTaskName(e.target.value)}
                ></input>
            </InputForm>
            <Button type="submit">Add new task</Button>
            </ToDoContainer>
            </form> 
        </>
    )
}