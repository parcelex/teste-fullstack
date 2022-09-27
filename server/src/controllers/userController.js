/* eslint-disable import/extensions */
import {
  serviceListAllUsers,
  serviceRegisterUser,
  serviceRemoveUser,
  serviceUpdateUser,
} from '../services/userService.js';
import userValidator from '../validators/userValidator.js';

async function listUsers(req, res) {
  try {
    const results = await serviceListAllUsers();

    if (!results) return res.status(404).send({ message: 'No users registered yet' });

    return res.status(200).json(results);
  } catch (e) {
    return res.status(500).send({ message: 'Error performing user search' });
  }
}

async function registerUser(req, res) {
  try {
    const data = req.body;

    await userValidator.validate(data);

    const results = await serviceRegisterUser(data);

    return res.status(200).json(results);
  } catch (e) {
    return res.status(500).send({ message: `Error adding user >>${e.message}` });
  }
}

async function removeUser(req, res) {
  try {
    const { id } = req.params;

    const results = await serviceRemoveUser(id);

    if (!results) return res.status(404).send({ message: 'User not found' });

    return res.status(200).send(results);
  } catch (e) {
    return res.status(500).send({ message: `Error removing user >>${e.message}` });
  }
}

async function updateUser(req, res) {
  try {
    const data = req.body;

    await userValidator.validate(data);

    const { id } = req.params;

    const result = await serviceUpdateUser(id, data);

    if (!result) return res.status(404).send({ message: 'User not found' });

    return res.status(200).send({ message: 'Successfully updating record' });
  } catch (e) {
    return res.status(500).send({ message: `Error updating user >>${e.message}` });
  }
}

export {
  listUsers,
  registerUser,
  removeUser,
  updateUser,
};
