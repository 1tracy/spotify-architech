import './App.css';
import React, { useState, useEffect, useRef } from 'react';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <>
      {!loggedIn &&  (
        <div className="App">
          <h1>My Spotify Architect</h1>
          <h2>Visualize your data</h2>
          <button onClick={() => setLoggedIn(true)}>Spotify Log In</button>
        </div>
      )}
      {loggedIn && (
        <div className="App">
          <h1>User logged in</h1>
          <button onClick={() => setLoggedIn(false)}>Log Out</button>
        </div>
      )}
    </>
  );
}

export default App;
