import Usuarios from "../models/ModelUsuario.js";

async function listaUsuarios(req, res) {
    try{
        const results = await Usuarios.find({});

        if(results < 1) return res.status(404).send({ mensagem : "Nenhum usuário cadastrado"})

        return res.status(200).json(results)
    } catch(e) {
        return res.status(500).send({ mensagem: "Erro ao realizar a busca de usuários" })
    } 
}

async function cadastraUsuario(req, res) {
    try {    

        const data = new Date(`${req.body.data_nascimento}`)

        const teste = new Date()

        const dados = new Usuarios({
            nome: req.body.nome,
            email: req.body.email,
            data_nascimento: data
        })    

        const novoUsuario = await dados.save()

        return res.status(201).send({
            mensagem: "Usuario criado com sucesso",
            dados: novoUsuario
        })


    } catch (e) {
        return res.status(500).send({ mensagem: "Erro na inclusão do usuário"})
    }
}

async function removeUsuario(req, res) {
    try{
        const result = await Usuarios.findByIdAndDelete(req.params.id)

        if(!result) return res.status(404).send({ mensagem : "Nenhum usuário encontrado"})

        return res.status(200).send({ mensagem: "Registro excluído com sucesso" })
    } catch(e) {
        return res.status(500).send({ mensagem: "Erro ao excluir usuário" })
    }  
}

async function atualizaUsuario(req, res) {
    try {
    
        const novoRegistro = {
            nome: req.body.nome, 
            email: req.body.email,
            data_nascimento: req.body.data_nascimento
        }

        const result = await Usuarios.findByIdAndUpdate(req.params.id, novoRegistro)

        if(!result) return res.status(404).send({ mensagem: "Usuário não encontrado"})

        return res.status(200).send({mensagem: "Sucesso ao atualizar o registro"})

    } catch(e) {
        return res.status(500).send({mensagem: "Erro ao atualizar o registro"})
    }
}

export {
    listaUsuarios,
    cadastraUsuario,
    removeUsuario,
    atualizaUsuario
}