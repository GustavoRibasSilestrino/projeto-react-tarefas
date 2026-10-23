import BotaoFiltro from './BotaoFiltro'

function Filtros({
  opcoesStatus,
  status,
  onStatus,
  categorias,
  categoria,
  onCategoria,
}) {
  return (
    <section className="filtros">
      <div className="grupo">
        {opcoesStatus.map((opcao) => (
          <BotaoFiltro
            key={opcao}
            rotulo={opcao}
            ativo={opcao === status}
            onClick={() => onStatus(opcao)}
          />
        ))}
      </div>
      <div className="grupo">
        {categorias.map((c) => (
          <BotaoFiltro
            key={c}
            rotulo={c}
            ativo={c === categoria}
            onClick={() => onCategoria(c)}
          />
        ))}
      </div>
    </section>
  )
}

export default Filtros
