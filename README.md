# Minhas Tarefas — Projeto React

Atividade da disciplina **Frameworks Front-end** (Aula 08 — Projeto React), do Prof. Me. Deivison S. Takatu.

Aplicação de lista de tarefas feita com React e Vite que aplica todos os conceitos estudados na aula.

**Aplicação online:** https://projeto-react-tarefas.vercel.app

## Descrição

O usuário cadastra tarefas com uma categoria, marca como concluídas, remove e filtra a lista por status e por categoria. O cabeçalho mostra o progresso geral.

## Funcionalidades

- Adicionar tarefa com título e categoria (com validação de campo vazio)
- Marcar e desmarcar tarefas como concluídas
- Remover tarefas
- Filtrar por status (Todas, Pendentes, Concluídas) e por categoria
- Barra de progresso com a porcentagem de tarefas concluídas
- Mensagem de carregamento e mensagem de lista vazia
- Tema claro e escuro automático, layout responsivo

## Conceitos utilizados

| Conceito | Onde aparece |
| --- | --- |
| **JSX** e expressões `{}` | Todos os componentes. Ex.: `{concluidas} de {total}` e `style={{ width: \`${percentual}%\` }}` em `Cabecalho.jsx`. Uso de `className` e `htmlFor` no lugar de `class` e `for`. |
| **Componentes** (criação, composição e reutilização) | `App` compõe `Cabecalho`, `FormularioTarefa`, `Filtros` e `ListaTarefas`; `ListaTarefas` compõe `ItemTarefa`; `Filtros` reutiliza `BotaoFiltro` para status e categorias. |
| **Props** | Dados descem (`tarefas`, `total`, `categorias`) e funções sobem como callbacks (`onAdicionar`, `onAlternar`, `onRemover`, `onStatus`). |
| **DOM e Virtual DOM** | Ao mudar o estado (`useState`), o React atualiza o Virtual DOM, compara com o DOM real e aplica só as diferenças. Ao marcar uma tarefa, apenas aquele item é atualizado. O estado é sempre substituído por novos arrays (`map`, `filter`, spread) e nunca alterado diretamente. |
| **Listas e Keys** | `ListaTarefas` usa `tarefas.map(...)` com `key={tarefa.id}`; `Filtros` e o `<select>` usam `key` com o próprio texto. Antes do `map`, `App` usa `filter()` para selecionar as tarefas visíveis. |
| **Renderização condicional** | `if` com `return` antecipado (lista vazia em `ListaTarefas`); operador ternário (carregando × lista em `App`; classe do item e do botão ativo); operador `&&` (mensagem de erro e mensagem de parabéns). |

## Estrutura

```
src/
├── App.jsx                     # estado, filtros e composição da tela
├── data.js                     # categorias e tarefas iniciais
├── index.css
├── main.jsx
└── components/
    ├── Cabecalho.jsx
    ├── FormularioTarefa.jsx
    ├── Filtros.jsx
    ├── BotaoFiltro.jsx
    ├── ListaTarefas.jsx
    └── ItemTarefa.jsx
```

## Como executar

```bash
npm install
npm run dev
```

Para gerar a versão de produção: `npm run build`.

## Tecnologias

React 19, Vite e CSS puro.
