import types from '../actions/types';

function checkLocalStorage() {
  if (localStorage.getItem('shoppingCart')) {
    return JSON.parse(localStorage.getItem('shoppingCart'));
  }
  return [];
}

const DEFAULT_STATE = {
  list: [],
  single: {},
  shoppingCart: checkLocalStorage(),
};

export default function (state = DEFAULT_STATE, action) {
  switch (action.type) {
    // case types.ADD_ITEM:
    //   state.shoppingCart.push(action.payload);
    //   localStorage.setItem('shoppingCart', JSON.stringify(state.shoppingCart));
    //   return { ...state };
    // case types.REMOVE_ITEM:
    // const filteredshoppingCart = state.shoppingCart.filter(
    //   (item) => item.parkinfo[0].id !== action.payload
    // );
    // localStorage.setItem('shoppingCart', JSON.stringify(filteredshoppingCart));
    // return { ...state, shoppingCart: filteredshoppingCart };
    case types.CLEAR_SINGLE_GAME:
      return { ...state, single: {} };
    case types.GET_SINGLE_GAME:
      return { ...state, single: action.payload };
    case types.GET_GAME_LIST:
      return { ...state, list: action.payload };
    default:
      return state;
  }
}
