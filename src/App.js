import './App.css';
import React, { useState, useEffect, useRef } from 'react';
import Nav from './Nav';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Line } from 'react-chartjs-2';

//import LineChart from './charts/chart';

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
  
  // CHARTS
  const [chartDisplay, setChartDisplay] = useState(0);
  const data1 = {
    labels: ['1', '2', '3', '4', '5', '6'],
    datasets: [
      {
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        fill: false,
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgba(255, 99, 132, 0.2)',
      },
    ],
  };

  const data2 = {
    labels: ['1', '2', '3', '4', '5', '6'],
    datasets: [
      {
        label: '# of Votes',
        data: [4, 22, 32, 1, 12, 31],
        fill: false,
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgba(255, 99, 132, 0.2)',
      },
    ],
  };
  
  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
    responsive: false
  };
  
  const LineChart1 = () => (
    <>
      <div className='chartHeader'>
        <h1 className='chartTitle'>Chart1</h1>
      </div>
      <Line data={data1} options={{ maintainAspectRatio: true }} />
    </>
  );

  const LineChart2 = () => (
    <>
      <div className='chartHeader'>
        <h1 className='chartTitle'>Chart2</h1>
      </div>
      <Line data={data2} options={{ maintainAspectRatio: true }} />
    </>
  );

  

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
        <body className = "MyData">
        <div className="App">
          <h1 className= "Data-title">My Data</h1>
          <div className="data">
            <div className="top10tracks">
              <ul><h2>My Top 10 Tracks </h2>{listTracks}</ul>
            </div>
            
            <div className="chart">
            <button type = "button" class="signIn" onClick={() => setChartDisplay(0)}>Display Chart 1</button>
            <button type = "button" class="signIn" onClick={() => setChartDisplay(1)}>Display Chart 2</button>
              {chartDisplay == 0 ? (
                <LineChart1/>
              ) : (
                <LineChart2/>
              )}
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
