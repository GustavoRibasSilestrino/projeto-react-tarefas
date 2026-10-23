import ItemTarefa from './ItemTarefa'

function ListaTarefas({ tarefas, onAlternar, onRemover }) {
  if (tarefas.length === 0) {
    return <p className="aviso">Nenhuma tarefa encontrada.</p>
  }

  return (
    <ul className="lista">
      {tarefas.map((tarefa) => (
        <ItemTarefa
          key={tarefa.id}
          tarefa={tarefa}
          onAlternar={onAlternar}
          onRemover={onRemover}
        />
      ))}
    </ul>
  )
}

export default ListaTarefas
