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
  const [popularPosts, setPopularPosts] = useState<PostInter[]>([]);

  useEffect(() => {
    //trade off between speed and dry code

    // const categories = {
    //   sports: [
    //     { r: 'nba', index: 2 },
    //     { r: 'nfl', index: 2 },
    //     { r: 'sports', index: 0 },
    //     { r: 'baseball', index: 2 },
    //   ],

    //   world: [
    //     { r: 'news', index: 0 },
    //     { r: 'worldnews', index: 1 },
    //     { r: 'worldevents', index: 0 },
    //   ],

    //   local: [
    //     { r: 'canadanews', index: 0 },
    //     { r: 'ontario', index: 1 },
    //     { r: 'toronto', index: 2 },
    //   ],

    //   entertainment: [
    //     { r: 'entertainment', index: 0 },
    //     { r: 'movies', index: 1 },
    //     { r: 'celebrities', index: 0 },
    //   ],

    //   politics: [
    //     { r: 'politics', index: 1 },
    //     { r: 'neutralpolitics', index: 1 },
    //     { r: 'canadianpolitics', index: 0 },
    //   ],
    //   realEstate: [
    //     { r: 'canadahousing', index: 2, end: 5 },
    //     { r: 'torontorealestate', index: 1, end: 4 },
    //   ],

    //   popular: [{ r: 'popular', index: 0, end: 6 }],
    // };

    // const addPosts = async (categories: { [x: string]: any }) => {
    //   for (const [key, val] of Object.entries(categories)) {
    //     let postFunction = setSportPosts;

    //     switch (key) {
    //       case 'sports':
    //         postFunction = setSportPosts;
    //         break;
    //       case 'world':
    //         postFunction = setWorldPosts;
    //         break;
    //       case 'local':
    //         postFunction = setLocalPosts;
    //         break;
    //       case 'entertainment':
    //         postFunction = setEnterPosts;
    //         break;
    //       case 'politics':
    //         postFunction = setPoliticPosts;
    //         break;
    //       case 'realEstate':
    //         postFunction = setRealPosts;
    //         break;
    //       case 'popular':
    //         postFunction = setPopularPosts;
    //         break;
    //     }
    //     const tempPost: PostInter[] = [];
    //     for (const subReddit of val) {
    //       const result = await redditAPI.getPosts(
    //         subReddit.r,
    //         subReddit.index,
    //         subReddit.end
    //       );
    //       tempPost.push(...result);
    //     }
    //     postFunction(tempPost);
    //   }
    // };

    const getPosts = async (subreddits: any) => {
      const posts: PostInter[] = [];
      for (const sub of subreddits) {
        const result = await redditAPI.getPosts(sub.r, sub.index, sub.end);
        posts.push(...result);
      }

      return posts;
    };

    const addSportPosts = async () => {
      const subreddit = [
        { r: 'nba', index: 2, end: 4 },
        { r: 'nfl', index: 2, end: 4 },
        { r: 'sports', index: 0, end: 2 },
        { r: 'baseball', index: 2, end: 4 },
        { r: 'nhl', index: 2, end: 4 },
      ];
      const posts = await getPosts(subreddit);
      setSportPosts(posts);
    };

    const addWorldPosts = async () => {
      const subreddit = [
        { r: 'news', index: 0, end: 3 },
        { r: 'worldnews', index: 1, end: 4 },
        { r: 'worldevents', index: 0, end: 2 },
      ];
      const posts = await getPosts(subreddit);
      setWorldPosts(posts);
    };

    const addLocalPosts = async () => {
      const subreddit = [
        { r: 'canada', index: 0, end: 2 },
        { r: 'ontario', index: 1, end: 3 },
        { r: 'toronto', index: 2, end: 4 },
      ];
      const posts = await getPosts(subreddit);
      setLocalPosts(posts);
    };

    const addEnterPosts = async () => {
      const subreddit = [
        { r: 'entertainment', index: 0, end: 2 },
        { r: 'movies', index: 1, end: 3 },
        { r: 'celebrities', index: 0, end: 2 },
      ];
      const posts = await getPosts(subreddit);
      setEnterPosts(posts);
    };

    const addPoliticPosts = async () => {
      const subreddit = [
        { r: 'politics', index: 1, end: 3 },
        { r: 'neutralpolitics', index: 1, end: 3 },
        { r: 'canadianpolitics', index: 0, end: 2 },
      ];
      const posts = await getPosts(subreddit);
      setPoliticPosts(posts);
    };

    const addRealPosts = async () => {
      const subreddit = [
        { r: 'canadahousing', index: 2, end: 5 },
        { r: 'torontorealestate', index: 1, end: 4 },
      ];
      const posts = await getPosts(subreddit);
      setRealPosts(posts);
    };

    const addPopularPosts = async () => {
      const subreddit = [{ r: 'popular', index: 0, end: 5 }];
      const posts = await getPosts(subreddit);
      setPopularPosts(posts);
    };

    addSportPosts();
    addWorldPosts();
    addLocalPosts();
    addEnterPosts();
    addPoliticPosts();
    addRealPosts();
    addPopularPosts();
    // addPosts(categories);
  }, []);
  return (
    <div className="Main h-100 border-box">
      <Post
        idName={'world-news'}
        title={'World News'}
        posts={worldPosts}
      ></Post>
      <Post idName={'cdn-news'} title={'CDN News'} posts={localPosts}></Post>
      <Post idName={'popular'} title={'Popular'} posts={popularPosts}></Post>
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
    </div>
  );
};

export default Main;
