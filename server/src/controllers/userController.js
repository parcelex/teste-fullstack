/* eslint-disable import/extensions */
import Users from '../models/ModelUser.js';

async function listUsers(req, res) {
  try {
    const results = await Users.find({});

    if (results < 1) return res.status(404).send({ message: 'No registered user' });

    return res.status(200).json(results);
  } catch (e) {
    return res.status(500).send({ message: 'Error performing user search' });
  }
}

async function registerUser(req, res) {
  try {
    const date = new Date(`${req.body.birthDate}`);

    const datas = new Users({
      name: req.body.name,
      email: req.body.email,
      birthDate: date,
    });

    const newUser = await datas.save();

    return res.status(201).send({
      message: 'User created',
      datas: newUser,
    });
  } catch (e) {
    return res.status(500).send({ message: 'Erro adding user' });
  }
}

async function removeUser(req, res) {
  try {
    const result = await Users.findByIdAndDelete(req.params.id);

    if (!result) return res.status(404).send({ message: 'No users found' });

    return res.status(200).send({ message: 'No users found' });
  } catch (e) {
    return res.status(500).send({ message: 'Error deleting user' });
  }
}

async function updateUser(req, res) {
  try {
    const novoRegistro = {
      name: req.body.name,
      email: req.body.email,
      birthDate: req.body.birthDate,
    };

    const result = await Users.findByIdAndUpdate(req.params.id, novoRegistro);

    if (!result) return res.status(404).send({ message: 'User not found' });

    return res.status(200).send({ message: 'Successfully updating record' });
  } catch (e) {
    return res.status(500).send({ message: 'Error updating registry' });
  }
}

export {
  listUsers,
  registerUser,
  removeUser,
  updateUser,
};
