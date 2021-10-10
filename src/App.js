import './App.css';
import React, { useState, useEffect, useRef } from 'react';
import Nav from './Nav';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import LineChart from './charts/chart';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [apiResponse, setapiResponse] = useState('');
  const tracks = ['track1', 'track2', 'track3', 'track4', 'track5', 'track6', 'track7', 'track8', 'track9', 'track10'];
  const listTracks = tracks.map((track) => 
    <li>{track}</li>
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
              <LineChart />
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
