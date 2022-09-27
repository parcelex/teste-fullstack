import express from 'express';
import usuarios from './users.js';

const routes = (app) => {
  app.route('/health').get((req, res) => {
    res.status(200).send({ message: 'API working pefectly' });
  });

  app.use(
    express.json(),
    usuarios,
  );
};

export default routes;
