import './global.css'
import { Header } from './components/Header/header'
import { List } from './components/List/list'
import { HeaderContainer } from './components/Header/styles'
import { useState } from 'react';

export interface TaskType {
  id: number;
  name: string;
}

const taskList: TaskType[] = [
  { id: 1, name: "finish homework"},
  { id: 2, name: "Read a Book"},
  { id: 3, name: "Go for a Walk"},
]

function App() {
  const [tasks, setTasks] = useState<TaskType[]>(taskList)

  return (
    <HeaderContainer>
      <Header tasks={tasks} setTasks={setTasks} />
      <List tasks={tasks} setTasks={setTasks} />
    </HeaderContainer>
  )
}

export default App
