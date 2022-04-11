import React from 'react';
import './Main.css';
import Post from './Post';
import { PostInter } from '../types';
// import '../App.css';
interface IProps {
  posts: PostInter[];
}
const Main = ({ posts }: IProps) => {
  return (
    <div className="Main h-100 border-box">
      <Post title={'Global'} posts={posts}></Post>
      <Post title={'Test'} posts={posts}></Post>
    </div>
  );
};

export default Main;
