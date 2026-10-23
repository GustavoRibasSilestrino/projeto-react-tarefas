function Cabecalho({ total, concluidas }) {
  const percentual = total === 0 ? 0 : Math.round((concluidas / total) * 100)

  return (
    <header className="cabecalho">
      <h1>Minhas Tarefas</h1>
      <p>
        {concluidas} de {total} concluídas ({percentual}%)
      </p>
      <div className="barra" role="progressbar" aria-valuenow={percentual}>
        <div className="barra-preenchida" style={{ width: `${percentual}%` }} />
      </div>
      {total > 0 && concluidas === total && (
        <p className="parabens">Parabéns! Tudo concluído 🎉</p>
      )}
    </header>
  )
}

export default Cabecalho
