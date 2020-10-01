import React from 'react';
import './App.css';
import {HeadingProvider} from './HeadingContext';
import List from './List/List';

function App() {
  return (
    <div className="App">
      <HeadingProvider>
        <List />
      </HeadingProvider>
    </div>
  );
}

export default App;
