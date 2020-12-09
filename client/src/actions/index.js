// import axios from 'axios';
import types from './types';
// import config from '../config';
import {
  getGameListData,
  getSingleGameData,
  getGenreListData,
} from './rawg-api';

export async function getGameListAction(
  queryCategory = null,
  queryItem = null,
  querySort = null
) {
  const response = getGameListData(queryCategory, queryItem, querySort);

  return {
    type: types.GET_GAME_LIST,
    payload: response,
  };
}

export async function getGenreListAction() {
  const response = getGenreListData();

  return {
    type: types.GET_GENRE_LIST,
    payload: response,
  };
}

export async function getSingleGameAction(id) {
  const response = getSingleGameData(id);

  return {
    type: types.GET_SINGLE_GAME,
    payload: response,
  };
}

export function clearSingleItemAction() {
  return {
    type: types.CLEAR_SINGLE_GAME,
  };
}

export function clearGameListAction() {
  return {
    type: types.CLEAR_GAME_LIST,
  };
}

export function addGameToShoppingCartAction(payload) {
  // localStorage.setItem('itinerary', resp.data.token)
  return {
    type: types.ADD_GAME_TO_SHOPPING_CART,
    payload,
  };
}

export function removeGameFromShoppingCartAction(payload) {
  // localStorage.removeItem('token')
  return {
    type: types.REMOVE_GAME_FROM_SHOPPING_CART,
    payload,
  };
}

export function updateShoppingCartAction(payload) {
  return {
    type: types.UPDATE_SHOPPING_CART,
    payload,
  };
}
