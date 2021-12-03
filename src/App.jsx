import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AppBar from './components/AppBar/AppBar';
import Schedule from './components/Schedule/Schedule';
import Submission from './components/Submission/Submission';


function App() {
  return (
    <>
      <BrowserRouter>
        <AppBar />
        <div className="container">
          <Routes>
            <Route exact path="/" element={<Schedule />} />
            <Route path="/submission" element={<Submission />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
