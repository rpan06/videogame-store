import axios from 'axios';

export async function createAccount(payload) {
  let response = {
    success: null,
    error: null,
  };

  await axios
    .post('/user/signup/', payload)
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
    .post('/user/signup/', payload)
    .then((response) => {
      response.success = response;
    })
    .catch((error) => {
      response.error = error;
    });
  return response;
}
