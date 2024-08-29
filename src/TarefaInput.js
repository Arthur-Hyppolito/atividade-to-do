import React from 'react';
import './TarefaInput.css';

function TarefaInput({ novaTarefa, setNovaTarefa, adicionarTarefa }) {
  return (
    <div className="tarefa-input">
      <input
        type="text"
        value={novaTarefa}
        onChange={(e) => setNovaTarefa(e.target.value)}
        placeholder="Digite uma nova tarefa"
      />
      <button onClick={adicionarTarefa}>Adicionar Tarefa</button>
    </div>
  );
}

export default TarefaInput;
