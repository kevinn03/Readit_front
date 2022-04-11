import React, { useState, useEffect } from 'react';
import './App.css';
import Main from './components/Main';
import Header from './components/Header';
import SubHeader from './components/SubHeader';
import redditAPI from './services/redditAPI';
import { PostInter } from './types';

function App() {
  const [posts, setPosts] = useState<PostInter[]>([]);

  useEffect(() => {
    const addPosts = async () => {
      const tempPost: PostInter[] = [];
      const result = await redditAPI.getPosts('nba');
      tempPost.push(...result);
      setPosts(tempPost);
    };

    addPosts();
  }, []);

  return (
    <div className="App h-100">
      <Header></Header>
      <SubHeader></SubHeader>
      <Main posts={posts}></Main>
    </div>
  );
}

export default App;
