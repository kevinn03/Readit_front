import React from 'react';
import './Main.css';
import Post from './Post';
// import '../App.css';
const Main = () => {
  return (
    <div className="Main h-100 border-box">
      <Post></Post>
      <Post></Post>
    </div>
  );
};

export default Main;
