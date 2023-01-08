import axios from 'axios';
const baseURL = '/api/reddit';

const getPosts = async (subreddit: string, index = 0, end = index + 2) => {
  const response = await axios.get(
    `${baseURL}/${subreddit}?index=${index.toString()}&end=${end.toString()}`
  );
  return response.data;
};

export default { getPosts };
