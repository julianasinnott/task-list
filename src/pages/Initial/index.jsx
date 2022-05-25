import { ListPlus, Trash } from 'phosphor-react'
import { useState } from 'react'
import { Card } from '../../components/Card'

import './styles.css'

export function Initial() {
  const [tasksName, setTasksName] = useState('') 
  const [taskList, setTaskList] = useState([])

  function resetTaskList (){
    setTaskList([])
  }

  return (
    <div className='box'>
      <h1>Lista de Tarefas</h1>
      <div className='form'>
        <input
          onChange={e => setTasksName(e.target.value)}
          type="text"
          placeholder="O que vamos fazer hoje?"
        />
        <ListPlus className="button" size={24} onClick={() => tasksName !== '' && setTaskList([...taskList, tasksName])} />
        <Trash className="button" size={24} onClick={() => resetTaskList()} />
      </div>
      {taskList.map((task, index) =>       
        <Card key={index} nameTask={task} /> 
      )}
    </div>
    ) 
  }


