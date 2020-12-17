import axios from 'axios';

export async function createAccount(payload) {
  const response = {
    success: null,
    error: null,
  };
  await axios
    .post('/api/user/register/', payload)
    .then((res) => {
      response.success = res.data;
    })
    .catch((error) => {
      response.error = error.response.data.errors;
    });
  return response;
}

export async function signIn(payload) {
  const response = {
    success: null,
    error: null,
  };
  await axios
    .post('/api/user/signin/', payload)
    .then((res) => {
      response.success = res.data;
    })
    .catch((error) => {
      response.error = error.response.data.errors;
    });
  return response;
}
