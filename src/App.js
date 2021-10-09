import './App.css';
import React, { useState, useEffect, useRef } from 'react';
import LineChart from './charts/chart';
import { ReactComponent as LineGraph } from './vectors/landingpage.svg';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <>
      {!loggedIn &&  (
        <div className="App">
          <h1>My Spotify Architect</h1>
          <h2>Visualize your data</h2>
          <button onClick={() => setLoggedIn(true)}>Spotify Log In</button>
          <LineGraph/>
        </div>
      )}
      {loggedIn && (
        <div className="App">
          <h1>My Data</h1>
          <h2 className="top10tracks">My Top 10 Tracks </h2>
          <LineChart />
          <button onClick={() => setLoggedIn(false)}>Log Out</button>
        </div>
      )}
    </>
  );
}

export default App;
