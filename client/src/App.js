import React, { useState, useEffect } from 'react';

import './App.css';
import './global.css';
import './sidebar.css';
import './main.css';

import Notes from './components/Notes';
import api from './services/api';

function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [birthDate, setDataNascimento] = useState('');
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
      name,
      email,
      birthDate,
    });

    setName('');
    setEmail('');
    setDataNascimento('');
    /* Verificar a atualizaçao da pagina AQUI */
    setAllUsuarios([...allUsuarios, response.data]);
  }

  useEffect(() => {
    function enableSubmitButton() {
      const btn = document.getElementById('btn_submit');
      btn.style.background = '#FFD3CA';
      if (name && email && birthDate) {
        btn.style.background = '#EB8F7A';
      }
    }
    enableSubmitButton();
  }, [name, email, birthDate]);

  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <div id="app">
      <aside>
        <strong>Cadastro de Usuário</strong>
        <form onSubmit={handleSubmit}>
          <div className="input-block">
            <label htmlFor="name">name</label>
            <input
              type="text"
              name="name"
              id="name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
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
            <label htmlFor="birthDate">Data de Nascimento</label>
            <input
              type="date"
              required
              name="birthDate"
              id="birthDate"
              value={birthDate}
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
