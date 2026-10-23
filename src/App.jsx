import { useEffect, useState } from 'react'
import Cabecalho from './components/Cabecalho'
import FormularioTarefa from './components/FormularioTarefa'
import Filtros from './components/Filtros'
import ListaTarefas from './components/ListaTarefas'
import { CATEGORIAS, TAREFAS_INICIAIS } from './data'

const FILTROS = ['Todas', 'Pendentes', 'Concluídas']

function App() {
  const [tarefas, setTarefas] = useState([])
  const [carregando, setCarregando] = useState(true)
  const [filtro, setFiltro] = useState('Todas')
  const [categoria, setCategoria] = useState('Todas')

  // Simula o carregamento de dados de um servidor.
  useEffect(() => {
    const timer = setTimeout(() => {
      setTarefas(TAREFAS_INICIAIS)
      setCarregando(false)
    }, 900)
    return () => clearTimeout(timer)
  }, [])

  // Sempre criamos um novo array, sem modificar o estado existente.
  function adicionarTarefa(titulo, categoriaNova) {
    const nova = {
      id: Date.now(),
      titulo,
      categoria: categoriaNova,
      concluida: false,
    }
    setTarefas([...tarefas, nova])
  }

  function alternarTarefa(id) {
    setTarefas(
      tarefas.map((t) => (t.id === id ? { ...t, concluida: !t.concluida } : t)),
    )
  }

  function removerTarefa(id) {
    setTarefas(tarefas.filter((t) => t.id !== id))
  }

  const visiveis = tarefas.filter((t) => {
    const okStatus =
      filtro === 'Todas' ||
      (filtro === 'Pendentes' && !t.concluida) ||
      (filtro === 'Concluídas' && t.concluida)
    const okCategoria = categoria === 'Todas' || t.categoria === categoria
    return okStatus && okCategoria
  })

  const concluidas = tarefas.filter((t) => t.concluida).length

  return (
    <main className="app">
      <Cabecalho total={tarefas.length} concluidas={concluidas} />
      <FormularioTarefa categorias={CATEGORIAS} onAdicionar={adicionarTarefa} />
      <Filtros
        opcoesStatus={FILTROS}
        status={filtro}
        onStatus={setFiltro}
        categorias={['Todas', ...CATEGORIAS]}
        categoria={categoria}
        onCategoria={setCategoria}
      />
      {carregando ? (
        <p className="aviso">Carregando tarefas...</p>
      ) : (
        <ListaTarefas
          tarefas={visiveis}
          onAlternar={alternarTarefa}
          onRemover={removerTarefa}
        />
      )}
    </main>
  )
}

export default App
