/* eslint-disable import/extensions */
import Users from '../models/ModelUser.js';

async function repositoryListAllUsers() {
  try {
    const results = await Users.find({});

    return results;
  } catch (e) {
    return e.message;
  }
}

async function repositoryRegisterUser(newUserData) {
  try {
    const newUser = new Users(newUserData);

    const results = await newUser.save();

    return results;
  } catch (e) {
    return e.message;
  }
}

async function repositoryRemoveUser(id) {
  try {
    const result = await Users.findByIdAndDelete(id);

    return result;
  } catch (e) {
    return e.message;
  }
}

async function repositoryUpdateUser(id, body) {
  try {
    const result = await Users.findByIdAndUpdate(id, body);

    return result;
  } catch (e) {
    return e.message;
  }
}

export {
  repositoryListAllUsers,
  repositoryRegisterUser,
  repositoryRemoveUser,
  repositoryUpdateUser,
};
