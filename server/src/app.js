/* eslint-disable import/extensions */
// import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import db from './config/db.js';
import routes from './routes/index.js';

// INSTANCIA VARIÁVEIS DE AMBIENTE
// dotenv.config();

// INSTANCIA CONEXÃO COM O BANCO
db.on('error', () => {
  console.log('[CONFIG] - Error connecting to database');
});

db.once('open', () => {
  console.log('[CONFIG] - Success connecting to database');
});

// INSTANCIA APLICACAO
const app = express();
const port = 3001;

app.use(cors());

app.listen(port, () => {
  console.log('[CONFIG] - Success initializing the service');
});

// CONECTA INDEX ROUTES
routes(app);
