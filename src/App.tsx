import React from 'react';
import './App.css';
import {LogsProvider} from './HeadingContext';
import Counter from './List/Counter';
import List from './List/List';

function App() {
  return (
    <div className="App">
      <LogsProvider>
        <List />
        <Counter />
      </LogsProvider>
    </div>
  );
}

export default App;
