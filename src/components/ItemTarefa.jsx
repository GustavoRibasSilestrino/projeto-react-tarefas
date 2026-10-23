function ItemTarefa({ tarefa, onAlternar, onRemover }) {
  const { id, titulo, categoria, concluida } = tarefa

  return (
    <li className={concluida ? 'item concluida' : 'item'}>
      <label>
        <input
          type="checkbox"
          checked={concluida}
          onChange={() => onAlternar(id)}
        />
        <span className="titulo">{titulo}</span>
      </label>
      <span className="etiqueta">{categoria}</span>
      <button
        type="button"
        className="remover"
        aria-label={`Remover ${titulo}`}
        onClick={() => onRemover(id)}
      >
        ✕
      </button>
    </li>
  )
}

export default ItemTarefa
