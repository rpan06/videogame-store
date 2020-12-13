const defaultState = {
  loggedIn: false,
  user: {},
};

const userReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'SET_USER':
      return {
        loggedIn: true,
        user: { ...action.payload },
      };
    case 'LOG_OUT':
      console.log('in log out user_reducer');
      localStorage.clear();
      return {
        loggedIn: false,
        user: {},
      };
    default:
      return state;
  }
};

export default userReducer;
