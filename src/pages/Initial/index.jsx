import { ListPlus, Trash } from 'phosphor-react'
import { useEffect, useState } from 'react'
import { Card } from '../../components/Card'
import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header'
import { useGetUser } from '../../services/useGetUser'

import './styles.css'

export function Initial() {
  const initialTaskList = JSON.parse(localStorage.getItem('taskStorage'))  
  const [tasksName, setTasksName] = useState('') 
  const [taskList, setTaskList] = useState(initialTaskList || [])
  const { data, getUser } = useGetUser()

  useEffect(() => {
    getUser()
  }, [])

  useEffect(()=>{
    setItemOnLocalStorage('taskStorage', taskList)
  },[taskList])

  function setItemOnLocalStorage(key, value) {
    localStorage.setItem(key,JSON.stringify(value)) 
  } 

  function taskSubmit(event) {   
    event.preventDefault()
    tasksName !== '' && setTaskList([...taskList, tasksName])    
    event.target.reset()
  } 

  function resetTaskList (event){
    event.preventDefault()
    setTaskList([])
  }  

  return (
    <div className='container'>
      <div className='box'>
        <Header user={data} />
        <h1>Lista de Tarefas</h1>
        <main className='main'>
          <form onSubmit={taskSubmit} className='form'>
            <input
              className='inputTask'
              onChange={e => setTasksName(e.target.value)}
              type='text'
              placeholder='O que vamos fazer hoje?'
            />
            <button
              type='submit'
              className='button'
            >
              <ListPlus size={24} />
            </button>
            <button
              type='reset'
              className='button'
              onClick={resetTaskList}
            >
              <Trash size={24} />
            </button>
          </form>
        </main>
        <section className='card-section'>
          {taskList.map((task, index) =>       
            <Card key={index} nameTask={task} /> 
          )}
        </section>
        <Footer />
      </div>
    </div>
    ) 
  }


