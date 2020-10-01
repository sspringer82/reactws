import React from 'react';
import './App.css';
import Form from './Form';
import {LogsProvider} from './HeadingContext';
import Counter from './List/Counter';
import List from './List/List';

function App() {
  return (
    <div className="App">
      <LogsProvider>
        <List />
        <Counter />
        <Form />
      </LogsProvider>
    </div>
  );
}

export default App;
