import './global.css'
import { Header } from './components/Header/header'
import { List } from './components/List/list'
import { HeaderContainer } from './components/Header/styles'
import { useState } from 'react';

export interface TaskType {
  id: number;
  name: string;
  completed: boolean;
}

function App() {
  const [tasks, setTasks] = useState<TaskType[]>([])

  return (
    <HeaderContainer>
      <Header tasks={tasks} setTasks={setTasks} />
      <List tasks={tasks} setTasks={setTasks} />
    </HeaderContainer>
  )
}

export default App
