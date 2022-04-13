import React, { useState, useEffect } from 'react';
import './Main.css';
import Post from './Post';
import redditAPI from '../services/redditAPI';
import { PostInter } from '../types';

const Main = () => {
  const [sportPosts, setSportPosts] = useState<PostInter[]>([]);
  const [worldPosts, setWorldPosts] = useState<PostInter[]>([]);
  const [localPosts, setLocalPosts] = useState<PostInter[]>([]);
  const [enterPosts, setEnterPosts] = useState<PostInter[]>([]);
  const [politcPosts, setPoliticPosts] = useState<PostInter[]>([]);
  const [realPosts, setRealPosts] = useState<PostInter[]>([]);

  useEffect(() => {
    const addSportPosts = async () => {
      const subreddit = [
        { r: 'nba', index: 2 },
        { r: 'nfl', index: 2 },
        { r: 'sports', index: 0 },
        { r: 'baseball', index: 2 },
      ];
      const tempPost: PostInter[] = [];
      for (const sub of subreddit) {
        const result = await redditAPI.getPosts(sub.r, sub.index);
        tempPost.push(...result);
      }
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
      setLocalPosts(tempPost);
    };

    const addEnterPosts = async () => {
      const subreddit = [
        { r: 'entertainment', index: 0 },
        { r: 'movies', index: 1 },
        { r: 'celebrities', index: 0 },
      ];
      const tempPost: PostInter[] = [];
      for (const sub of subreddit) {
        const result = await redditAPI.getPosts(sub.r, sub.index);
        tempPost.push(...result);
      }
      setEnterPosts(tempPost);
    };

    const addPoliticPosts = async () => {
      const subreddit = [
        { r: 'politics', index: 1 },
        { r: 'neutralpolitics', index: 1 },
        { r: 'canadianpolitics', index: 0 },
      ];
      const tempPost: PostInter[] = [];
      for (const sub of subreddit) {
        const result = await redditAPI.getPosts(sub.r, sub.index);
        tempPost.push(...result);
      }
      setPoliticPosts(tempPost);
    };

    const addRealPosts = async () => {
      const subreddit = [
        { r: 'canadahousing', index: 2 },
        { r: 'torontorealestate', index: 1 },
      ];
      const tempPost: PostInter[] = [];
      for (const sub of subreddit) {
        const result = await redditAPI.getPosts(sub.r, sub.index);
        tempPost.push(...result);
      }
      setRealPosts(tempPost);
    };

    addSportPosts();
    addWorldPosts();
    addLocalPosts();
    addEnterPosts();
    addPoliticPosts();
    addRealPosts();
  }, []);
  return (
    <div className="Main h-100 border-box">
      <Post
        idName={'world-news'}
        title={'World News'}
        posts={worldPosts}
      ></Post>
      <Post idName={'cdn-news'} title={'CDN News'} posts={localPosts}></Post>
      <Post idName={'sports'} title={'Sports'} posts={sportPosts}></Post>
      <Post idName={'politics'} title={'Politics'} posts={politcPosts}></Post>
      <Post
        idName={'real-estate'}
        title={'Real Estate'}
        posts={realPosts}
      ></Post>
      <Post
        idName={'entertainment'}
        title={'Entertainment'}
        posts={enterPosts}
      ></Post>
      {/* <Post title={'Technology'} posts={posts}></Post> */}
    </div>
  );
};

export default Main;
