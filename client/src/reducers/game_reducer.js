const defaultState = {
  game: {},
};

const gameReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'GET_GAME':
      return {
        game: { ...action.payload },
      };
    default:
      return state;
  }
};

export default gameReducer;
