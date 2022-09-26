import React, { useState } from "react"
import api from "../../services/api"

function Notes({data, handleDelete}){
    
    const [ changedEmail, setChangedEmail] = useState()
    const [ changedDataNascimento, setChangedDataNascimento] = useState()

    async function handleSaveEmail(e, email) {
        if(changedEmail && changedEmail != email) {
            await api.patch(`/usuarios/${data._id}`,{
                email: changedEmail,
            })    
        } 
    }

    async function handleSaveDataNascimento(e, dataNascimento) {
        if(changedDataNascimento && changedDataNascimento != dataNascimento) {
            await api.patch(`/usuarios/${data._id}`,{
                dataNascimento: changedDataNascimento,
            })    
        } 
    }

    return(
        <>
            <li className="notepad-infos">
                <div>
                    <strong>{data.nome}</strong>

                    <div onClick={() => handleDelete(data._id)}>
                        x
                    </div>
                </div>
                <label htmlFor="cad_email">E-mail</label>
                <textarea 
                    name="cad_email" 
                    id="cad_email" 
                    defaultValue={data.email}
                    onChange={e => setChangedEmail(e.target.value)}
                    onBlur={e => handleSaveEmail(e.target, data.email)}
                />

                <label htmlFor="cad_dt_nascimento">Data de Nascimento</label>
                <textarea 
                    name="cad_dt_nascimento" 
                    id="cad_dt_nascimento" 
                    defaultValue={data.dataNascimento}
                    onChange={e => setChangedDataNascimento(e.target.value)}
                    onBlur={e => handleSaveDataNascimento(e.target, data.dataNascimento)}
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
        </>
    )
}

export default Notes