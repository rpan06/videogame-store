import axios from 'axios';
import config from '../config';

const RAWG_CONFIG = {
  baseUrl: 'https://rawg-video-games-database.p.rapidapi.com/',
  headers: {
    'x-rapidapi-key': config.RAWG_API_KEY,
    'x-rapidapi-host': 'rawg-video-games-database.p.rapidapi.com',
    useQueryString: true,
  },
};

export async function getGenreListData() {
  const options = {
    method: 'GET',
    url: 'https://rawg-video-games-database.p.rapidapi.com/genres',
    headers: {
      'x-rapidapi-key': config.RAWG_API_KEY,
      'x-rapidapi-host': 'rawg-video-games-database.p.rapidapi.com',
    },
  };

  let list;

  await axios
    .request(options)
    .then((resp) => {
      list = resp.data.results;
    })
    .catch((error) => {
      // eslint-disable-next-line
      console.error(error);
    });
  return list;
}

export async function getGameListData(
  queryCategory = null,
  queryItem = null,
  querySort = null
) {
  // sample url with query string: https://rawg-video-games-database.p.rapidapi.com/games?genres=action
  const querySearch = queryCategory ? `?${queryCategory}=${queryItem}` : '';
  const queryOrder = querySort ? `&ordering=${querySort}` : '';
  const options = {
    method: 'GET',
    url: `${RAWG_CONFIG.baseUrl}games${querySearch}${queryOrder}`,
    headers: RAWG_CONFIG.headers,
  };

  let list;

  await axios
    .request(options)
    .then((resp) => {
      list = resp.data.results;
    })
    .catch((error) => {
      // eslint-disable-next-line
      console.error(error);
    });
  return list;
}

export async function getSingleGameData(id) {
  const options = {
    method: 'GET',
    url: `${RAWG_CONFIG.baseUrl}games/${id}`,
    headers: RAWG_CONFIG.headers,
  };

  let item;

  await axios
    .request(options)
    .then((resp) => {
      item = resp.data;
    })
    .catch((error) => {
      // eslint-disable-next-line
      console.error(error);
    });
  return item;
}
