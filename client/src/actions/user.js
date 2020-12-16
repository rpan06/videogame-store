import axios from 'axios';

export async function createAccount(payload) {
  const response = {
    success: null,
    error: null,
  };
  await axios
    .post('http://localhost:4000/api/user/signup/', payload)
    .then((res) => {
      response.success = res;
    })
    .catch((error) => {
      response.error = error;
    });
  return response;
}

export async function loginAccount(payload) {
  const response = {
    success: null,
    error: null,
  };
  await axios
    .post('http://localhost:4000/api/user/login/', payload)
    .then((res) => {
      response.success = res;
    })
    .catch((error) => {
      response.error = error;
    });
  return response;
}
