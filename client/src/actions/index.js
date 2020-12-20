import types from './types';
import {
  getGameListData,
  getSingleGameData,
  getGenreListData,
} from './rawg-api';
import { createAccount, signIn } from './user';

export async function getGameListAction(
  queryCategory = null,
  queryItem = null,
  querySort = null
) {
  const response = await getGameListData(queryCategory, queryItem, querySort);

  return {
    type: types.GET_GAME_LIST,
    payload: response,
  };
}

export async function getGenreListAction() {
  const response = await getGenreListData();

  return {
    type: types.GET_GENRE_LIST,
    payload: response,
  };
}

export async function getSingleGameAction(id) {
  const response = await getSingleGameData(id);

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
  return {
    type: types.ADD_GAME_TO_SHOPPING_CART,
    payload,
  };
}

export function removeGameFromShoppingCartAction(payload) {
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

export async function createAccountAction(payload) {
  const response = await createAccount(payload);

  return {
    type: types.SET_USER,
    payload: response,
  };
}

export async function signInAction(payload) {
  const response = await signIn(payload);
  return {
    type: types.SET_USER,
    payload: response,
  };
}

export async function logOutAction() {
  return {
    type: types.LOG_OUT,
  };
}

export async function apiErrorAction() {
  return {
    type: types.API_ERROR,
  };
}
