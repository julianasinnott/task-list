import { ListPlus, Trash } from 'phosphor-react'
import { useEffect, useState } from 'react'
import { Card } from '../../components/Card'
import { Header } from '../../components/Header'
import { useGetUser } from '../../features/pages/hooks/useGetUser'

import './styles.css'

export function Initial() {
  const [tasksName, setTasksName] = useState('') 
  const [taskList, setTaskList] = useState([])
  const { data, getUser } = useGetUser()

  useEffect(() => {
    getUser()
  }, [])

  function resetTaskList (){
    setTaskList([])
  }

  return (
    <div className='box'>
      <Header user={data} />
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


