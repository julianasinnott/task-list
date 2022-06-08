import { ListPlus, Trash } from 'phosphor-react'
import { useEffect, useState } from 'react'
import { Card } from '../../components/Card'
import { Header } from '../../components/Header'
import { useGetUser } from '../../services/useGetUser'

import './styles.css'

export function Initial() {
  const [tasksName, setTasksName] = useState('') 
  const [taskList, setTaskList] = useState([])
  const { data, getUser } = useGetUser()

  useEffect(() => {
    getUser()
  }, [])

  function taskSubmit(event) {   
    event.preventDefault()
    tasksName !== '' && setTaskList([...taskList, tasksName])    
    Array.from(document.querySelectorAll("input")).forEach(
      input => (input.value = ""))
  }

  function resetTaskList (event){
    event.preventDefault()
    setTaskList([])
  }  

  return (
    <div className='box'>
      <Header user={data} />
      <h1>Lista de Tarefas</h1>
      <main>
        <form className='form'>
          <input
            onChange={e => setTasksName(e.target.value)}
            type="text"
            placeholder="O que vamos fazer hoje?"
          />
          <button
            className="button"
            onClick={taskSubmit}  
          >
            <ListPlus size={24} />
          </button>
          <button
            className="button"
            onClick={resetTaskList}
          >
            <Trash size={24} />
          </button>
        </form>
      </main>
      {taskList.map((task, index) =>       
        <Card key={index} nameTask={task} /> 
      )}
    </div>
    ) 
  }


