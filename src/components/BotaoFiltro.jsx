function BotaoFiltro({ rotulo, ativo, onClick }) {
  return (
    <button
      type="button"
      className={ativo ? 'chip ativo' : 'chip'}
      aria-pressed={ativo}
      onClick={onClick}
    >
      {rotulo}
    </button>
  )
}

export default BotaoFiltro
