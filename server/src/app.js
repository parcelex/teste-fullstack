/* eslint-disable import/extensions */
import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import db from './config/db.js';
import routes from './routes/index.js';

// INSTANCIA VARIÁVEIS DE AMBIENTE
dotenv.config();

// INSTANCIA CONEXÃO COM O BANCO
db.on('error', () => {
  console.log('[CONFIG] - ERRO ao conectar com o banco de dados');
});

db.once('open', () => {
  console.log('[CONFIG] - SUCESSO ao conectar banco de dados');
});

// INSTANCIA APLICACAO
const app = express();
const port = 3001;

app.use(cors());

app.listen(port, () => {
  console.log('[CONFIG] - SUCESSO ao inicializar o serviço');
});

// CONECTA INDEX ROUTES
routes(app);
