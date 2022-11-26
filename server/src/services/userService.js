/* eslint-disable import/extensions */
import {
  repositoryListAllUsers,
  repositoryRemoveUser,
  repositoryRegisterUser,
  repositoryUpdateUser,
} from '../repositories/userRepository.js';

async function serviceListAllUsers() {
  const results = repositoryListAllUsers();

  if (!results) return 0;

  return results;
}

async function serviceRegisterUser(data) {
  const newUserData = {
    name: data.name,
    email: data.email,
    birthDate: data.birthDate,
  };

  return repositoryRegisterUser(newUserData);
}

async function serviceRemoveUser(id) {
  const results = repositoryRemoveUser(id);

  if (!results) return 0;

  return results;
}

async function serviceUpdateUser(id, data) {
  const results = repositoryUpdateUser(id, data);

  if (!results) return 0;

  return results;
}

export {
  serviceListAllUsers,
  serviceRegisterUser,
  serviceRemoveUser,
  serviceUpdateUser,
};
