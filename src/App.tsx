import React from 'react';
import './App.css';
import Main from './components/Main';
import Header from './components/Header';
import SubHeader from './components/SubHeader';
import About from './components/About';
function App() {
  return (
    <div className="App h-100">
      <Header></Header>
      <SubHeader></SubHeader>
      <About></About>
      <Main></Main>
    </div>
  );
}

export default App;
