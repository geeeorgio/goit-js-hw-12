import axios from 'axios';

const API_KEY = '50205845-1a821f8a08bf3bfbd622691da';

axios.defaults.baseURL = 'https://pixabay.com/api/';
axios.defaults.params = {
  key: API_KEY,
  image_type: 'photo',
  orientation: 'horizontal',
  safesearch: 'true',
};

export function getImagesByQuery(query) {
  return axios.get('', { params: { q: query } }).then(response => {
    const hits = response.data.hits;
    if (hits.length === 0) {
      throw new Error();
    }
    return hits;
  });
}
