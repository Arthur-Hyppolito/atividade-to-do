import React, { useState } from 'react';
import './App.css';
import TarefaInput from './TarefaInput';
import ListaTarefas from './ListaTarefas';
import './TarefaInput.css'
import'./ListaTarefas.css'

function App() {
  const [tarefas, setTarefas] = useState([]);
  const [novaTarefa, setNovaTarefa] = useState('');

  const adicionarTarefa = () => {
    if (novaTarefa.trim()) {
      setTarefas([...tarefas, { texto: novaTarefa, concluida: false }]);
      setNovaTarefa('');
    }
  };

  const marcarComoConcluida = (index) => {
    const novasTarefas = tarefas.map((tarefa, i) =>
      i === index ? { ...tarefa, concluida: !tarefa.concluida } : tarefa
    );
    setTarefas(novasTarefas);
  };

  const removerTarefa = (index) => {
    const novasTarefas = tarefas.filter((_, i) => i !== index);
    setTarefas(novasTarefas);
  };

  return (
    <div className="App">
      <h1>Lista de Tarefas</h1>
      <TarefaInput novaTarefa={novaTarefa} setNovaTarefa={setNovaTarefa} adicionarTarefa={adicionarTarefa} />
      <ListaTarefas tarefas={tarefas} marcarComoConcluida={marcarComoConcluida} removerTarefa={removerTarefa} />
    </div>
  );
}

export default App;
