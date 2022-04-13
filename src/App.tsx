import React from 'react';
import './App.css';
import Main from './components/Main';
import Header from './components/Header';
import SubHeader from './components/SubHeader';
import About from './components/About';
import Footer from './components/Footer';
function App() {
  document.addEventListener('DOMContentLoaded', function () {
    window.addEventListener('scroll', function () {
      const header = this.document.querySelector('#header-box');
      if (window.scrollY > 125) {
        header?.classList.add('sticky-top');
      } else {
        header?.classList.remove('sticky-top');
      }
    });
  });
  return (
    <div className="App h-100">
      <Header></Header>
      <SubHeader></SubHeader>
      <About></About>
      <Main></Main>
      <Footer></Footer>
    </div>
  );
}

export default App;
