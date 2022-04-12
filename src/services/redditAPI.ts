import axios from 'axios';
const baseURL = '/api/reddit';

const getPosts = async (subreddit: string, index = 0) => {
  const response = await axios.get(
    `${baseURL}/${subreddit}?index=${index.toString()}`
  );
  return response.data;
};

export default { getPosts };
