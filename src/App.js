import './App.css';
import React, { useState, useEffect, useRef } from 'react';
import LineChart from './charts/chart';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const tracks = ['track1', 'track2', 'track3', 'track4', 'track5', 'track6', 'track7', 'track8', 'track9', 'track10'];
  const listTracks = tracks.map((track) => 
<<<<<<< Updated upstream
    <li>{track}</li>
=======
    <div className = 'listBox'>
    <li className='li-track'>{track[0]}</li>
    <li className='li-artist'>{track[1]}</li>
    </div>
>>>>>>> Stashed changes
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
        <body className = "MyData">
        <div className="App">
          <h1 className= "Data-title">My Data</h1>
          <div className="data">
            <div className="top10tracks">
              <h2>My Top 10 Tracks </h2>
              <ul>{listTracks}</ul>
            </div>
            <div className="chart">
<<<<<<< Updated upstream
              <LineChart />
=======
            <button type = "button" class="signIn" onClick={() => setChartDisplay(0)}>Display Chart 1</button>
            <button type = "button" class="signIn" onClick={() => setChartDisplay(1)}>Display Chart 2</button>
              {chartDisplay === 0 ? (
                <LineChart1/>
              ) : (
                <LineChart2/>
              )}
>>>>>>> Stashed changes
            </div>

          </div>
          <button type = "button" class="signIn" onClick={() => setLoggedIn(false)}>Log Out</button>
        </div>
        </body>
      )}
    </>
  );
}

export default App;
