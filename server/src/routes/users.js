/* eslint-disable import/extensions */
import express from 'express';
import {
  listUsers, registerUser, removeUser, updateUser,
} from '../controllers/userController.js';

const router = express.Router();

router
  .get('/users', listUsers)
  .post('/users', registerUser)
  .delete('/users/:id', removeUser)
  .patch('/users/:id', updateUser);

export default router;
