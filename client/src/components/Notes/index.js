import React, { useState } from 'react';
import api from '../../services/api';

function Notes({ data, handleDelete }) {
  const [changedEmail, setChangedEmail] = useState();
  const [changedBirthDate, setChangedDataNascimento] = useState();

  async function handleSaveEmail(e, email) {
    if (changedEmail && changedEmail !== email) {
      await api.patch(`/users/${data._id}`, {
        email: changedEmail,
      });
    }
  }

  async function handleSaveBirthDate(e, birthDate) {
    if (changedBirthDate && changedBirthDate !== birthDate) {
      await api.patch(`/users/${data._id}`, {
        birthDate: changedBirthDate,
      });
    }
  }

  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <li className="notepad-infos">
      <div>
        <strong>{data.name}</strong>

        <div onClick={() => handleDelete(data._id)}>
          x
        </div>
      </div>
      <label htmlFor="cad_email">E-mail</label>
      <textarea
        name="cad_email"
        id="cad_email"
        defaultValue={data.email}
        onChange={(e) => setChangedEmail(e.target.value)}
        onBlur={(e) => handleSaveEmail(e.target, data.email)}
      />

      <label htmlFor="cad_birth_date">Data de Nascimento</label>
      <textarea
        name="cad_birth_date"
        id="cad_birth_date"
        defaultValue={data.birthDate}
        onChange={(e) => setChangedDataNascimento(e.target.value)}
        onBlur={(e) => handleSaveBirthDate(e.target, data.birthDate)}
      />

      <label htmlFor="createdAt">Data de Criação</label>
      <textarea
        name="createdAt"
        id="createdAt"
        defaultValue={data.createdAt}
        readOnly
      />

      <label htmlFor="updatedAt">Ultima atualização</label>
      <textarea
        name="updatedAt"
        id="updatedAt"
        defaultValue={data.updatedAt}
        readOnly
      />
    </li>
  );
}

export default Notes;
