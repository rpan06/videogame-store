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

// export async function getList(lat, lng) {
//   const resp = await axios({
//     method: 'GET',
//     params: { lat, lng },
//     url: `/api/results_data.php`,

//     headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
//   });
//   // console.log("resultsData PHP Call successful:", resp.data.data);
//   return {
//     type: types.GET_RESULTS_DATA,
//     payload: resp.data.data,
//   };
// }

// export async function getSingleItem(itemId) {
//   const resp = await axios({
//     method: 'GET',
//     params: { itemId },
//     url: `/api/park_details.php`,
//     headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
//   });
//   // console.log ("POST singleItem PHP Call success:", resp.data.data);
//   return {
//     type: types.GET_SINGLE_ITEM,
//     payload: resp.data.data,
//   };
// }

// export function addItem(item) {
//   // localStorage.setItem('itinerary', resp.data.token)
//   return {
//     type: types.ADD_ITEM,
//     payload: item,
//   };
// }

// export function removeItem(itemId) {
//   // localStorage.removeItem('token')
//   return {
//     type: types.REMOVE_ITEM,
//     payload: itemId,
//   };
// }
