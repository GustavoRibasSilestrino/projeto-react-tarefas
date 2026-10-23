import { useState } from 'react'

function FormularioTarefa({ categorias, onAdicionar }) {
  const [titulo, setTitulo] = useState('')
  const [categoria, setCategoria] = useState(categorias[0])
  const [erro, setErro] = useState('')

  function enviar(evento) {
    evento.preventDefault()
    if (titulo.trim() === '') {
      setErro('Digite o título da tarefa.')
      return
    }
    onAdicionar(titulo.trim(), categoria)
    setTitulo('')
    setErro('')
  }

  return (
    <form className="formulario" onSubmit={enviar}>
      <div className="linha">
        <label htmlFor="titulo" className="sr-only">
          Título da tarefa
        </label>
        <input
          id="titulo"
          type="text"
          placeholder="Nova tarefa..."
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
        />
        <label htmlFor="categoria" className="sr-only">
          Categoria
        </label>
        <select
          id="categoria"
          value={categoria}
          onChange={(e) => setCategoria(e.target.value)}
        >
          {categorias.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
        <button type="submit">Adicionar</button>
      </div>
      {erro && <p className="erro">{erro}</p>}
    </form>
  )
}

export default FormularioTarefa
