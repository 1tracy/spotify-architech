import './App.css';
import React, { useState, useEffect, useRef } from 'react';
import Nav from './Nav';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import LineChart from './charts/chart';
import { ReactComponent as LineGraph } from './vectors/Background.svg';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [apiResponse, setapiResponse] = useState('');
  const tracks = [['Shivers', 'Ed Sheeran'], 
                  ['STAY (with Justin Bieber)', 'The Kid LAROI, Justin Bieber'],
                  ['My Universe', 'Coldplay, BTS'],
                  ['Woman', 'Doja Cat'], 
                  ['INDUSTRY BABY (feat. Jake Harlow)', 'Lil Nas X, Jack Harlow'], 
                  ['Heat Waves', 'Glass Animals'], 
                  ['Beggin', 'Maneskin'], 
                  ['THATS WHAT I WANT', 'Lil Nas X'], 
                  ['love nwantiti (ah ah ah)', 'CKay'], 
                  ['Cold Heart - PNAU Remix', 'Elton John, Dua Lipa, PNAU']];
  const listTracks = tracks.map((track) => 
    <div>
    <li className='li-title'>{track[0]}</li>
    <li className='li-singer'>{track[1]}</li>
    </div>
  );

  useEffect(() => {
    const requestData = {
        method: 'POST',
        headers: {
        },
        body: JSON.stringify({ input: "test-input1" })
    };
    fetch('http://localhost:5000/time', requestData)
        .then(response => response.json())
        .then(responseJSON => console.log("responseJSON " + responseJSON.response));
}, []) 

  return (
    <>
      {!loggedIn &&  (
        <body className = "landing">
          <div className="App" >
          <h1 className= "App-title" >My Spotify Architect</h1>
          <h2 className= "App-description">Visualize your data</h2>
          <button type = "button" class="signIn" onClick={() => setLoggedIn(true)}>Log In With Spotify</button>
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
