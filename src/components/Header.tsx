import React from 'react';
import './Header.css';
const Header = () => {
  return (
    <div className="dis-flex Header">
      <div className="header-left header-item">News Scraped From Reddit</div>
      <div className="header-title header-item">
        <span className="header-title__front">ReadIt</span> News
      </div>
      <div className="header-right header-item">three</div>
    </div>
  );
};

export default Header;
