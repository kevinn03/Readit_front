import React from 'react';
import './Header.css';
const Header = () => {
  const DAYS = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  const MONTHS = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const date = new Date();
  return (
    <div className="dis-flex Header" id="home">
      <div className="header-left">
        <div className="header-left__item">News Scraped From Reddit</div>
      </div>
      <div className="header-title">
        <span className="header-title__front">ReadIt</span> News
      </div>
      <div className="header-right">
        <div>
          {DAYS[date.getDay()]}, {MONTHS[date.getMonth()]} {date.getDate()}{' '}
          {date.getFullYear()}
        </div>
        <div>
          {date.getHours()}:{date.getMinutes()}:
          {date.getMilliseconds().toString().slice(0, 2)}
        </div>
      </div>
    </div>
  );
};

export default Header;
