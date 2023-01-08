import React from 'react';
import './About.css';
const About = () => {
  return (
    <div id="about" className="w-100 about d-none">
      <p className="about-container">
        Inspired by
        <span className="crowded">
          <a href="https://www.crowded.news/" target="_blank" rel="noreferrer">
            {' '}
            crowded News{' '}
          </a>
        </span>
        ReadIt News was created, to provide an alternative source to
        tradiational Canadian news outlets, for Canadians.
      </p>
      <p>
        Reddit is a great source for news as it provides fairly uncensored
        information from all over the world in a timely manner.
      </p>
    </div>
  );
};

export default About;
