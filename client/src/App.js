import React, { useState, useEffect } from 'react';

import './App.css';
import './global.css';
import './sidebar.css';
import './main.css';

import Notes from './components/Notes';
import api from './services/api';

function App() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');
  const [allUsuarios, setAllUsuarios] = useState([]);

  useEffect(() => {
    async function getAllUser() {
      const response = await api.get('/usuarios');

      setAllUsuarios(response.data);
    }

    getAllUser();
  }, []);

  async function handleDelete(id) {
    const deleteUser = await api.delete(`/usuarios/${id}`);

    if (deleteUser) {
      setAllUsuarios(allUsuarios.filter((user) => user._id != id));
    }
  }

  async function handleSubmit(e) {
    const response = await api.post('/usuarios', {
      nome,
      email,
      dataNascimento,
    });

    setNome('');
    setEmail('');
    setDataNascimento('');
    /* Verificar a atualizaçao da pagina AQUI */
    setAllUsuarios([...allUsuarios, response.data]);
  }

  useEffect(() => {
    function enableSubmitButton() {
      const btn = document.getElementById('btn_submit');
      btn.style.background = '#FFD3CA';
      if (nome && email && dataNascimento) {
        btn.style.background = '#EB8F7A';
      }
    }
    enableSubmitButton();
  }, [nome, email, dataNascimento]);

  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <div id="app">
      <aside>
        <strong>Cadastro de Usuário</strong>
        <form onSubmit={handleSubmit}>
          <div className="input-block">
            <label htmlFor="nome">Nome</label>
            <input
              type="text"
              name="nome"
              id="nome"
              required
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />
          </div>
          <div className="input-block">
            <label htmlFor="email">E-mail</label>
            <input
              type="text"
              name="email"
              id="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input-block">
            <label htmlFor="dataNascimento">Data de Nascimento</label>
            <input
              type="date"
              required
              name="dataNascimento"
              id="dataNascimento"
              value={dataNascimento}
              onChange={(e) => setDataNascimento(e.target.value)}
            />
          </div>
          <button id="btn_submit" type="submit">Salvar</button>
        </form>
      </aside>
      <main>
        <ul>
          {allUsuarios.map((data) => (
            <Notes
              key={data._id}
              data={data}
              handleDelete={handleDelete}
            />
          ))}
        </ul>
      </main>
    </div>
  );
}

export default App;
