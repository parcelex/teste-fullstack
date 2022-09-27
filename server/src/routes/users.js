/* eslint-disable import/extensions */
import express from 'express';
import {
  listUsers, registerUser, removeUser, updateUser,
} from '../controllers/userController.js';

const router = express.Router();

router
  .get('/usuarios', listUsers)
  .post('/usuarios', registerUser)
  .delete('/usuarios/:id', removeUser)
  .patch('/usuarios/:id', updateUser);

export default router;
