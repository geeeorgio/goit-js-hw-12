import axios from 'axios';

const API_KEY = '50205845-1a821f8a08bf3bfbd622691da';

axios.defaults.baseURL = 'https://pixabay.com/api/';
axios.defaults.params = {
  key: API_KEY,
  image_type: 'photo',
  orientation: 'horizontal',
  safesearch: 'true',
  per_page: 15,
};

export async function getImagesByQuery(query, pg) {
  try {
    const response = await axios.get('', {
      params: {
        ...axios.defaults.params,
        q: query,
        page: pg ? pg : 1,
      },
    });

    return response;
  } catch (error) {
    console.log(error);
  }
}
