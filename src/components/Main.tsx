import React, { useState, useEffect } from 'react';
import './Main.css';
import Post from './Post';
import redditAPI from '../services/redditAPI';
import { PostInter } from '../types';

const Main = () => {
  const [sportPosts, setSportPosts] = useState<PostInter[]>([]);
  const [worldPosts, setWorldPosts] = useState<PostInter[]>([]);
  const [localPosts, setLocalPosts] = useState<PostInter[]>([]);

  useEffect(() => {
    const addSportPosts = async () => {
      const subreddit = [
        { r: 'nba', index: 2 },
        { r: 'nfl', index: 2 },
        { r: 'nhl', index: 2 },
        { r: 'baseball', index: 2 },
      ];
      const tempPost: PostInter[] = [];
      for (const sub of subreddit) {
        const result = await redditAPI.getPosts(sub.r, sub.index);
        tempPost.push(...result);
      }
      console.log(tempPost.sort((a, z) => (a.score < z.score ? 1 : -1)));
      setSportPosts(tempPost);
    };

    const addWorldPosts = async () => {
      const subreddit = [
        { r: 'news', index: 0 },
        { r: 'worldnews', index: 1 },
        { r: 'worldevents', index: 0 },
      ];
      const tempPost: PostInter[] = [];
      for (const sub of subreddit) {
        const result = await redditAPI.getPosts(sub.r, sub.index);
        tempPost.push(...result);
      }
      console.log(tempPost.sort((a, z) => (a.score < z.score ? 1 : -1)));
      setWorldPosts(tempPost);
    };

    const addLocalPosts = async () => {
      const subreddit = [
        { r: 'canadanews', index: 0 },
        { r: 'ontario', index: 1 },
        { r: 'toronto', index: 2 },
      ];
      const tempPost: PostInter[] = [];
      for (const sub of subreddit) {
        const result = await redditAPI.getPosts(sub.r, sub.index);
        tempPost.push(...result);
      }
      console.log(tempPost.sort((a, z) => (a.score < z.score ? 1 : -1)));
      setLocalPosts(tempPost);
    };

    addSportPosts();
    addWorldPosts();
    addLocalPosts();
  }, []);
  return (
    <div className="Main h-100 border-box">
      <Post title={'World News'} posts={worldPosts}></Post>
      <Post title={'CDN News'} posts={localPosts}></Post>
      {/* <Post title={'Entertainment'} posts={posts}></Post> */}
      <Post title={'Sports'} posts={sportPosts}></Post>
      {/* <Post title={'Politics'} posts={posts}></Post> */}
      {/* <Post title={'Business'} posts={posts}></Post> */}
      {/* <Post title={'Technology'} posts={posts}></Post> */}
    </div>
  );
};

export default Main;
