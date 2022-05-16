import { useState } from 'react'
import { Card } from '../../components/Card'
import './styles.css'

export function Initial() {
  const [tasksName, setTasksName] = useState('') 
  const [taskList, setTaskList] = useState([])

  return (
    <div className='box'>
      <h1>Lista de Tarefas</h1>
      <input
        onChange={e => setTasksName(e.target.value)}
        type="text"
        placeholder="Qual seu nome?"/>
      <button
        type="button"
        onClick={() => setTaskList([...taskList, tasksName])}
      >
        Adicionar
      </button>
      { taskList.map((task, index) => <Card key={index} nameTask={task} />) }
    </div>
  )
}


