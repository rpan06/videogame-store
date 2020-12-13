// /* eslint-disable prefer-const, no-shadow */
// import axios from 'axios';

// export async function createAccount(payload) {
//   let response = {
//     success: null,
//     error: null,
//   };

//   await axios
//     .post('http://localhost:4000/user/signup/', payload)
//     .then((response) => {
//       response.success = response;
//     })
//     .catch((error) => {
//       response.error = error;
//     });
//   return response;
// }

// export async function loginAccount(payload) {
//   let response = {
//     success: null,
//     error: null,
//   };

//   await axios
//     .post('http://localhost:4000/user/login/', payload)
//     .then((response) => {
//       response.success = response;
//     })
//     .catch((error) => {
//       response.error = error;
//     });

//   return response;
// }

// export async function getUser() {
//   let response = {
//     success: null,
//     error: null,
//   };

//   await axios
//     .post('http://localhost:4000/user/me/')
//     .then((response) => {Ç
//       response.success = response;
//     })
//     .catch((error) => {
//       response.error = error;
//     });
//   return response;
// }

// Action Creators

const setUser = (payload) => ({ type: 'SET_USER', payload });

export const logUserOut = () => ({ type: 'LOG_OUT' });

// Methods

export const fetchUser = (userInfo) => (dispatch) => {
  fetch(`http://localhost:4000/user/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(userInfo),
  })
    .then((res) => res.json())
    .then((data) => {
      // console.log('user', data);
      localStorage.setItem('token', data.token);
      dispatch(setUser(data.user));
    });
};

export const signUserUp = (userInfo) => (dispatch) => {
  fetch(`http://localhost:4000/user/signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(userInfo),
  })
    .then((res) => res.json())
    .then((data) => {
      localStorage.setItem('token', data.token);
      dispatch(setUser(data.user));
    });
};

/* eslint-disable */
// export const autoLogin = () => (dispatch) => {
//   fetch(`http://localhost:4000/auto_login`, {
//     headers: {
//       'Content-Type': 'application/json',
//       Accept: 'application/json',
//       Authorization: `Bearer ${localStorage.getItem('token')}`,
//     },
//   })
    // .then((res) => res.json())
    // .then((res) => res.text())
    // .then((text) => console.log(text))
    // .then((data) => {
    //   localStorage.setItem('token', data.token);
    //   dispatch(setUser(data.user));
    // });
// };
