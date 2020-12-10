/* eslint-disable prefer-const, no-shadow */
import axios from 'axios';

export async function createAccount(payload) {
  let response = {
    success: null,
    error: null,
  };

  await axios
    .post('http://localhost:4000/user/signup/', payload)
    .then((response) => {
      response.success = response;
    })
    .catch((error) => {
      response.error = error;
    });
  return response;
}

export async function loginAccount(payload) {
  let response = {
    success: null,
    error: null,
  };

  await axios
    .post('http://localhost:4000/user/login/', payload)
    .then((response) => {
      response.success = response;
    })
    .catch((error) => {
      response.error = error;
    });
  return response;
}
