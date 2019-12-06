import React from 'react';
import Navbar from './layout/Navbar';
import Main from './layout/Main';

function Dashboard() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <Main />
      </header>
    </div>
  );
}

export default Dashboard;

