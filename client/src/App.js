import React, { useState , useEffect} from "react"

import "./App.css"
import "./global.css"
import "./sidebar.css"
import "./main.css"

import Notes from "./components/Notes"
import api from "./services/api"

function App() {
    const [ nome, setNome ] = useState('')
    const [ email, setEmail ] = useState('')
    const [ data_nascimento, setData_nascimento ] = useState('')
    const [ allUsuarios, setAllUsuarios] = useState([])

    useEffect(() => {
        async function getAllUser() {
            const response = await api.get('/usuarios',)

            setAllUsuarios(response.data)
        }

        getAllUser()
    }, [])

    async function handleDelete(id) {
        const deleteUser = await api.delete(`/usuarios/${id}`)    

        if(deleteUser) {
            setAllUsuarios(allUsuarios.filter(user => user._id != id))
        }
    }

    async function handleSubmit(e) {

        const response  = await api.post('/usuarios', {
            nome,
            email,
            data_nascimento
        })

        setNome('')
        setEmail('')
        setData_nascimento('')
        /* Verificar a atualizaçao da pagina AQUI*/
        setAllUsuarios([...allUsuarios, response.data])    
        
    }

    useEffect(() => {
        function enableSubmitButton() {
            let btn = document.getElementById('btn_submit')
            btn.style.background = '#FFD3CA'
            if(nome && email && data_nascimento) {
                btn.style.background= "#EB8F7A"
                
            }
        }
        enableSubmitButton()
    }, [nome, email, data_nascimento])


    return (
        <div id="app">
            <aside>
                <strong>Cadastro de Usuário</strong>
                <form onSubmit={handleSubmit} >
                    <div className="input-block">
                        <label htmlFor="nome">Nome</label>
                        <input
                            type="text"
                            name="nome"
                            id="nome"
                            required
                            value={nome}
                            onChange={ e => setNome(e.target.value)}
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
                            onChange={ e => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="input-block">
                        <label htmlFor="data_nascimento">Data de Nascimento</label>
                        <input 
                            type="date" 
                            required
                            name="data_nascimento" 
                            id="data_nascimento"
                            value={data_nascimento}
                            onChange={ e => setData_nascimento(e.target.value)}
                        />
                    </div>
                    <button id="btn_submit" type="submit">Salvar</button>
                </form>
            </aside>
            <main>
                <ul>
                    {allUsuarios.map(data => (
                        <Notes
                            key={data._id} 
                            data={data} 
                            handleDelete={handleDelete}
                        />
                    ))}
                </ul>
            </main>
        </div>
    )
}

export default App;
