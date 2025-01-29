import axios from 'axios';

const base_url = process.env.NEWS_API_BASE_URL;
const api_key = process.env.NEWS_API_KEY;

const apiClient = axios.create({
  baseURL: base_url,
  headers: {
    Authorization: `Bearer ${api_key}`,
    'Content-Type': 'application/json',
  },
});

export const fetchTopHeadlines = async () => {
  try {
    const response = await apiClient.get('/top-headlines', {
      params: {
        country: 'us',
        pageSize: 10,
      },
    });
    if (response.status === 200) {
      return response.data.articles;
    } else {
      throw new Error(response.status + ' : ' + response.statusText);
    }
  } catch (error) {
    console.error('Error fetching top news headlines: ', error);
  }
};
