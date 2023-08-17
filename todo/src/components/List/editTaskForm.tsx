import { useState } from 'react'
import { TaskType } from '../../App';
import { TaskEdit } from "./styles"

interface EditTaskFormProps {
    task: TaskType;
    onSave: () => void;
    updateTask: (taskId: number, newName: string) => void;
}

export function EditTaskForm({task, onSave, updateTask}: EditTaskFormProps) {
    const [editedName, setEditedName] = useState(task.name)

    const handleSave = () => {
        updateTask(task.id, editedName)
        onSave();
    };

    return (
        <TaskEdit>
          <button onClick={handleSave}>Edit</button>
          <input
            type="text"
            value={editedName}
            onChange={(e) => setEditedName(e.target.value)}
          />
        </TaskEdit>
      );
}