import { Trash } from 'phosphor-react'
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
      <input
        onChange={e => setTasksName(e.target.value)}
        type="text"
        placeholder="O que vamos fazer hoje?"
      />
      <div className='buttons'>
        <button
          className='add'
          type="button"
          onClick={() => tasksName !== '' && setTaskList([...taskList, tasksName])}
        >
          Adicionar
        </button>
        <button
        type='button'
        onClick={() => resetTaskList()}
        className='resetButton'
        >
          <Trash size={24} />
        </button>
      </div>
      {taskList.map((task, index) =>       
        <Card key={index} nameTask={task} /> 
      )}
    </div>
    ) 
  }


