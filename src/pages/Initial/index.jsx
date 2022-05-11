import { Card } from '../../components/Card'
import './styles.css'








export function Initial() {


  return (
    
    <div className='box'>
      <h1>Lista de Presença</h1>
      <input type="text" placeholder="Qual seu nome?"/>
      <button type="button">Adicionar</button>
      <Card />
    </div>
  )
}


