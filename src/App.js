import { useEffect, useState } from 'react';
import axios from 'axios';
import { Route, Routes, Link } from 'react-router-dom';
import TripContainer from './TripContainer';
import Tour from './Tour';
import './App.css';



function App() {


  return (
    <div className="App">
      <h1>Welcome to our super cool project!!</h1>
      <TripContainer />
      <Routes>
        <Route path="/"/>
        {/* <Route path="/TripContainer/:tripID" element={<TripContainer />}></Route> */}
      </Routes>
    </div>
  );
}

export default App;
