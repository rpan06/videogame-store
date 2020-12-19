import types from '../actions/types';

function checkLocalStorage() {
  if (localStorage.getItem('shoppingCart')) {
    return JSON.parse(localStorage.getItem('shoppingCart'));
  }
  return [];
}

function addGameToShoppingCart(payload, shoppingCart) {
  let itemInCart = false;
  shoppingCart.forEach((item) => {
    if (item.game.id === payload.game.id) {
      itemInCart = true;
      item.quantity++;
    }
  });
  if (!itemInCart) {
    shoppingCart.push(payload);
  }
  localStorage.setItem('shoppingCart', JSON.stringify(shoppingCart));
  return shoppingCart;
}

const DEFAULT_STATE = {
  list: [],
  single: {},
  shoppingCart: checkLocalStorage(),
  apiError: false,
};

export default (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case types.GET_GAME_LIST:
      return { ...state, list: action.payload };
    case types.GET_SINGLE_GAME:
      return { ...state, single: action.payload };
    case types.CLEAR_SINGLE_GAME:
      return { ...state, single: {} };
    case types.ADD_GAME_TO_SHOPPING_CART:
      state.shoppingCart = addGameToShoppingCart(
        action.payload,
        state.shoppingCart
      );
      return { ...state };
    case types.REMOVE_GAME_FROM_SHOPPING_CART: {
      const filteredShoppingCart = state.shoppingCart.filter(
        (item) => item.game.id !== action.payload.game.id
      );
      localStorage.setItem(
        'shoppingCart',
        JSON.stringify(filteredShoppingCart)
      );
      return { ...state, shoppingCart: filteredShoppingCart };
    }
    case types.UPDATE_SHOPPING_CART: {
      const filteredShoppingCart = state.shoppingCart.map((item) => {
        if (item.game.id === action.payload.game.id) {
          item.quantity = action.payload.quantity;
        }
        return item;
      });
      localStorage.setItem(
        'shoppingCart',
        JSON.stringify(filteredShoppingCart)
      );
      return { ...state, shoppingCart: filteredShoppingCart };
    }
    case types.SET_USER:
      if (action.payload.success) {
        localStorage.setItem(
          'token',
          JSON.stringify(action.payload.success.token)
        );
      }
      return state;
    case types.LOG_OUT:
      localStorage.clear('token');
      return state;
    case types.API_ERROR:
      return { ...state, apiError: true };
    default:
      return state;
  }
};
