import React from 'react';
import './ListaTarefas.css';

function ListaTarefas({ tarefas, marcarComoConcluida, removerTarefa }) {
  return (
    <ul className="lista-tarefas">
      {tarefas.map((tarefa, index) => (
        <li key={index} className={`tarefa-item ${tarefa.concluida ? 'concluida' : ''}`}>
          <input
            type="checkbox"
            checked={tarefa.concluida}
            onChange={() => marcarComoConcluida(index)}
          />
          <span>{tarefa.texto}</span>
          <button onClick={() => removerTarefa(index)}>Remover</button>
        </li>
      ))}
    </ul>
  );
}

export default ListaTarefas;
