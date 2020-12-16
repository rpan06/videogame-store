// Action Creators

const setUser = (payload) => ({ type: 'SET_USER', payload });

export const logUserOut = () => ({ type: 'LOG_OUT' });

// Methods

export const fetchUser = (userInfo) => (dispatch) => {
  fetch(`http://localhost:4000/api/user/login`, {
    method: 'POST',
    mode: 'no-cors',
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
    })
    .catch((err) => {
      console.log(err.toString());
    });
};

export const signUserUp = (userInfo) => (dispatch) => {
  fetch(`http://localhost:4000/api/user/signup`, {
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
