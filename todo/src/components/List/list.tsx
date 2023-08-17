import { 
    TaskContainer, Task, Actions, TaskName,
    CheckSquare, EditButton, DeleteButton 
} from "./styles"
import { TaskType } from '../../App'
import { EditTaskForm } from "./editTaskForm";
import { useState } from "react";


interface ListProps {
    tasks: TaskType[];
    setTasks: React.Dispatch<React.SetStateAction<TaskType[]>>; 
}

export function List({ tasks, setTasks }: ListProps) {
    const [editingTaskId, setEditingTaskId] = useState<number | null>(null);

    const handleToggleEdit = (taskId: number) => {
        setEditingTaskId(taskId === editingTaskId ? null : taskId)
    }

    const updateTask = (taskId: number, newName: string) => {
      const updatedTasks = tasks.map((task) => 
        task.id === taskId ? {...task, name: newName} : task
      )
      setTasks(updatedTasks)
    }

    const handleDeleteTask = (taskId: number) => {
      // Filter out the task with the given taskId
      const updatedTasks = tasks.filter(task => task.id !== taskId);
      setTasks(updatedTasks);
    };

    const handleCompleteTask = (taskId: number) => {
      const updatedTasks = tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      );
      setTasks(updatedTasks);
    }

    return (
      <TaskContainer>
        <h1>Tasks</h1>
        {tasks.length === 0 ? ( // Display messafe if there's no tasks
        <p>No tasks, enter a new one!</p> 
        ) : (
        tasks.map((task) => (
        <Task key={task.id}>
          {editingTaskId === task.id ? (
            <EditTaskForm 
              task={task}
              onSave={() => handleToggleEdit(task.id)}
              updateTask={updateTask}
            />
          ) : (
          <TaskName completed={task.completed}>
            <p>{task.name}</p>
          </TaskName>
          )}
          <Actions>
            <CheckSquare onClick={() => handleCompleteTask(task.id)} />
            <EditButton onClick={() => handleToggleEdit(task.id)} />
            <DeleteButton onClick={() => handleDeleteTask(task.id)} />
          </Actions>
        </Task>
          ))
          )}
      </TaskContainer>
  )
}