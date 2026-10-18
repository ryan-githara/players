import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import PlayersList from './playerslist';

function App() {
  return (
    <div className="App" style={{ backgroundColor: '#e9ecef', minHeight: '100vh' }}>
      <h1 className="text-center pt-4" style={{ fontWeight: 'bold' }}>FIFA Players</h1>
      <PlayersList />
    </div>
  );
}

export default App;
