import express from "express"
import usuarios from "./usuarios.js"

const routes = (app) => {
    app.route('/health').get((req, res) => {
        res.status(200).send({mensagem: "API funcionando perfeitamente"})
    })

    app.use(
        express.json(),
        usuarios
    )
}

export default routes