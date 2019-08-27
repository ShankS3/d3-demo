import React from 'react';
import BarGraph from './components/graph/BarGraph';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BarGraph width={800} height={300} />
      </header>
    </div>
  );
}

export default App;
