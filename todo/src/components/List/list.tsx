import { 
    TaskContainer, Task, Actions, TaskName,
    CheckSquare, EditButton, DeleteButton 
} from "./styles"

const tasks = [
    { id: 1, name: "finish homework"},
    { id: 2, name: "Read a Book"},
    { id: 3, name: "Go for a Walk"},
]

export function List() {
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
                    <DeleteButton />
                </Actions>
                </Task>
            ))}
        </TaskContainer>
    )
}