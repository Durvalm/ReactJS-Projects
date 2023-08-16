import { useState } from "react";
import { 
    TaskContainer, Task, Actions, TaskName,
    CheckSquare, EditButton, DeleteButton 
} from "./styles"
import { TaskType } from '../../App'


interface ListProps {
    tasks: TaskType[];
    setTasks: React.Dispatch<React.SetStateAction<TaskType[]>>; 
}

export function List({ tasks, setTasks }: ListProps) {

    const handleDeleteTask = (taskId: number) => {
        // Filter out the task with the given taskId
        const updatedTasks = tasks.filter(task => task.id !== taskId);
        setTasks(updatedTasks);
      };

    return (
        <TaskContainer>
            <h1>Tasks</h1>
            {tasks.map((task) => (
                <Task key={task.id}>
                <TaskName>
                    <p>{task.name}</p>
                </TaskName>
                <Actions>
                    <CheckSquare />
                    <EditButton />
                    <DeleteButton onClick={() => handleDeleteTask(task.id)} />
                </Actions>
                </Task>
            ))}
        </TaskContainer>
    )
}