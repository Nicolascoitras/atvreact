import React, { useState } from 'react';
import './App.css';

function App() {
  const [tarefa, settarefa] = useState('');
  const [tarefas, settarefas] = useState([]);

  const handleInputChange = (event) => {
    settarefa(event.target.value);
  };

  const handleAddtarefa = () => {
    if (tarefa.trim() !== '') {
      settarefas([...tarefas, { name: tarefa, done: false }]);
      settarefa('');
    }
  };

  const handleToggletarefa = (index) => {
    const updatedtarefas = [...tarefas];
    updatedtarefas[index].done = !updatedtarefas[index].done;
    settarefas(updatedtarefas);
  };

  const handleDeletetarefa = (index) => {
    const updatedtarefas = [...tarefas];
    updatedtarefas.splice(index, 1);
    settarefas(updatedtarefas);
  };

  return (
    <div id='app'>
      <h1>Lista de Tarefas</h1>
      <div className='h-s1'>
        <input
          type="text"
          placeholder='Adicione uma nova tarefa'
          value={tarefa}
          onChange={handleInputChange}
        />
        <button onClick={handleAddtarefa}> Criar</button>
      </div>
      {tarefas.length > 0 && <h2>Tarefas Criadas: {tarefas.length}</h2>}
      <ul>
        {tarefas.map((tarefa, index) => (
          <li key={index} className={tarefa.done ? 'done' : ''}>
            <input
              type="checkbox"
              checked={tarefa.done}
              onChange={() => handleToggletarefa(index)}
            />
            {tarefa.name}
            <button onClick={() => handleDeletetarefa(index)}>Apagar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
