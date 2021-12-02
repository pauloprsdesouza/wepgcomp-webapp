import React from 'react';
import './App.css';
import AppBar from './components/AppBar/AppBar';
import Schedule from './components/Schedule/Schedule';


function App() {
  return (
    <>
      <AppBar />
      <div className="container">
        <Schedule />
      </div>
    </>
  );
}

export default App;
