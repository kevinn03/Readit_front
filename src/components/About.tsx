import React from 'react';
import './About.css';
const About = () => {
  return (
    <div id="about" className="w-100 about">
      <p className="about-container">
        Inspired by
        <span className="crowded">
          <a href="https://www.crowded.news/"> crowded News </a>
        </span>
        ReadIt News was created, to provide an alternative source to
        tradiational Canadian news outlets, for Torontonians.
      </p>
    </div>
  );
};

export default About;
