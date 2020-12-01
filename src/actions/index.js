import axios from 'axios';
import types from './types';
import config from '../config';

const RAWG_CONFIG = {
  baseUrl: 'https://rawg-video-games-database.p.rapidapi.com/',
  headers: {
    'x-rapidapi-key': config.RAWG_API_KEY,
    'x-rapidapi-host': 'rawg-video-games-database.p.rapidapi.com',
  },
};

const GAME_DATABASE_CONFIG = {
  baseUrl: 'https://gamedatabasestefan-skliarovv1.p.rapidapi.com/',
  headers: {
    'content-type': 'application/x-www-form-urlencoded',
    'x-rapidapi-key': config.GAMEDATABASE_API_KEY,
    'x-rapidapi-host': 'GameDatabasestefan-skliarovV1.p.rapidapi.com',
  },
};

export async function getGameList() {
  const options = {
    method: 'GET',
    url: `${RAWG_CONFIG.baseUrl}games`,
    headers: RAWG_CONFIG.headers,
  };

  const response = axios
    .request(options)
    .then((resp) => resp.data)
    .catch((error) => {
      console.error(error);
    });

  return {
    type: types.GET_GAME_LIST,
    payload: response,
  };
}

export async function getReviews() {
  const options = {
    method: 'POST',
    url: `${GAME_DATABASE_CONFIG.baseUrl}getReviews`,
    headers: GAME_DATABASE_CONFIG.headers,
    data: {
      reviewIds: 'undefined',
      userKey: 'undefined',
      requestUrl: 'undefined',
    },
  };

  const response = axios
    .request(options)
    .then((resp) => resp.data)
    .catch((error) => {
      console.error(error);
    });

  return {
    type: types.GET_GAME_LIST,
    payload: response,
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

// export function clearSingleItem() {
//   return {
//     type: types.CLEAR_SINGLE_ITEM,
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
