import './App.css';
import React, { useState, useEffect, useRef } from 'react';
import LineChart from './charts/chart';
import { ReactComponent as LineGraph } from './vectors/Background.svg';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const tracks = ['track1', 'track2', 'track3', 'track4', 'track5', 'track6', 'track7', 'track8', 'track9', 'track10'];
  const listTracks = tracks.map((track) => 
    <li>{track}</li>
  );

  
  return (
    <>
      {!loggedIn &&  (
        <body className = "landing">
          <div className="App" >
          <h1 className= "App-title" >My Spotify Architect</h1>
          <h2 className= "App-description">Visualize your data</h2>
          <button type = "button" class="signIn" onClick={() => setLoggedIn(true)}>Spotify Log In</button>
          </div>
        </body>
        
      )}
      {loggedIn && (
        <div className="App">
          <h1>My Data</h1>
          <div className="data">
            <div className="top10tracks">
              <h2>My Top 10 Tracks </h2>
              <ul>{listTracks}</ul>
            </div>
            <div className="chart">
              <LineChart />
            </div>

          </div>
          <button type = "button" class="signIn" onClick={() => setLoggedIn(false)}>Log Out</button>
        </div>
      )}
    </>
  );
}

export default App;
