/* eslint-disable import/extensions */
import express from 'express';
import {
  listaUsuarios, cadastraUsuario, removeUsuario, atualizaUsuario,
} from '../controllers/usuarioController.js';

const router = express.Router();

router
  .get('/usuarios', listaUsuarios)
  .post('/usuarios', cadastraUsuario)
  .delete('/usuarios/:id', removeUsuario)
  .patch('/usuarios/:id', atualizaUsuario);

export default router;
