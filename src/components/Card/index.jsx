import './style.css';




export function Card ({nameTask}) {
    return (
      <section className="card">
          {nameTask}
      </section>
    )
}