import './style.css';




export function Card ({nameTask}) {
    return (
      <div className="card">
          <b>{nameTask}</b>
      </div>
    )
}