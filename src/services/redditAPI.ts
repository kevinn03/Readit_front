import axios from 'axios';
const baseURL = '/api/reddit';

const getPosts = async (subreddit: string) => {
  const response = await axios.get(`${baseURL}/${subreddit}`);
  return response.data;
};

export default { getPosts };
