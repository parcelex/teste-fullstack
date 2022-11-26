/* eslint-disable import/extensions */
import express from 'express';
import cors from 'cors';
import db from './config/db.js';
import routes from './routes/index.js';

db.on('error', () => {
  console.log('[CONFIG] - Error connecting to database');
});

db.once('open', () => {
  console.log('[CONFIG] - Success connecting to database');
});

const app = express();
const port = 3001;

app.use(cors());

app.listen(port, () => {
  console.log('[CONFIG] - Success initializing the service');
});

routes(app);
